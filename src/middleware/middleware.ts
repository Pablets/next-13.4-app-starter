import { NextRequest, NextResponse } from 'next/server';

import MiddlewareConfig, { MiddlewareConfigWithDefaults } from './NextIntlMiddlewareConfig';
import getAlternateLinksHeaderValue from './getAlternateLinksHeaderValue';
import resolveLocale from './resolveLocale';
import { getBestMatchingDomain, getLocaleFromPathname, isLocaleSupportedOnDomain } from './utils';
import { COOKIE_LOCALE_NAME } from './constants';

const ROOT_URL = '/';

function receiveConfig(config: MiddlewareConfig) {
  const result: MiddlewareConfigWithDefaults = {
    ...config,
    alternateLinks: config.alternateLinks ?? true,
    localePrefix: config.localePrefix ?? 'as-needed',
    localeDetection: config.localeDetection ?? true,
  };

  return result;
}

export default function createMiddleware(config: MiddlewareConfig) {
  const configWithDefaults = receiveConfig(config);

  // Currently only in use to enable a seamless upgrade path from the
  // `{createIntlMiddleware} from 'next-intl/server'` API.
  const matcher: Array<string> | undefined = [
    '/((?!api|_next/static/css|_next/static/media|_next/image|assets|favicon.ico).*)',
  ];

  return function middleware(request: NextRequest) {
    const matches = !matcher || matcher.some((pattern) => request.nextUrl.pathname.match(pattern));
    if (!matches) return NextResponse.next();

    const { locale } = resolveLocale(configWithDefaults, request.headers, request.cookies, request.nextUrl.pathname);

    const isRoot = request.nextUrl.pathname === ROOT_URL;
    const hasOutdatedCookie = request.cookies.get(COOKIE_LOCALE_NAME)?.value !== locale;
    const hasMatchedDefaultLocale = locale === configWithDefaults.defaultLocale;

    const domainConfigs =
      configWithDefaults.domains?.filter((curDomain) => isLocaleSupportedOnDomain(locale, curDomain)) || [];
    const hasUnknownHost = configWithDefaults.domains != null;

    function getResponseInit() {
      const responseInit = {
        request: {
          headers: request.headers,
        },
      };

      return responseInit;
    }

    function rewrite(url: string) {
      return NextResponse.rewrite(new URL(url, request.url), getResponseInit());
    }

    function next() {
      return NextResponse.next(getResponseInit());
    }

    function redirect(url: string, host?: string) {
      const urlObj = new URL(url, request.url);

      if (host) {
        urlObj.host = host;
      }

      return NextResponse.redirect(urlObj.toString());
    }

    let response;
    if (isRoot) {
      let pathWithSearch = `/${locale}`;
      if (request.nextUrl.search) {
        pathWithSearch += request.nextUrl.search;
      }

      if (hasMatchedDefaultLocale && configWithDefaults.localePrefix === 'as-needed') {
        response = rewrite(pathWithSearch);
      } else {
        response = redirect(pathWithSearch);
      }
    } else {
      const pathLocaleCandidate = getLocaleFromPathname(request.nextUrl.pathname);
      const pathLocale = configWithDefaults.locales.includes(pathLocaleCandidate) ? pathLocaleCandidate : undefined;
      const hasLocalePrefix = pathLocale != null;

      let pathWithSearch = request.nextUrl.pathname;
      if (request.nextUrl.search) {
        pathWithSearch += request.nextUrl.search;
      }

      if (hasLocalePrefix) {
        const basePath = pathWithSearch.replace(`/${pathLocale}`, '') || '/';

        if (pathLocale === locale) {
          if (hasMatchedDefaultLocale && configWithDefaults.localePrefix === 'as-needed') {
            response = redirect(basePath);
          } else {
            if (configWithDefaults.domains) {
              const pathDomain = getBestMatchingDomain(undefined, pathLocale, domainConfigs);

              if (pathDomain?.domain && !hasUnknownHost) {
                response = redirect(basePath, pathDomain?.domain);
              } else {
                response = next();
              }
            } else {
              response = next();
            }
          }
        } else {
          response = redirect(`/${locale}${basePath}`);
        }
      } else {
        if (
          hasMatchedDefaultLocale &&
          (configWithDefaults.localePrefix === 'as-needed' || configWithDefaults.domains)
        ) {
          response = rewrite(`/${locale}${pathWithSearch}`);
        } else {
          response = redirect(`/${locale}${pathWithSearch}`);
        }
      }
    }

    if (hasOutdatedCookie) {
      response.cookies.set(COOKIE_LOCALE_NAME, locale, {
        sameSite: 'strict',
      });
    }

    if (configWithDefaults.alternateLinks && configWithDefaults.locales.length > 1) {
      response.headers.set('Link', getAlternateLinksHeaderValue(configWithDefaults, request));
    }

    return response;
  };
}
