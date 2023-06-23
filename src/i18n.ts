export const defaultLocale = 'en';
export const locales = [defaultLocale, 'es'] as const;
export type ValidLocale = (typeof locales)[number];

type PathnameLocale = {
  pathname: string;
  locale?: never;
};

type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

export const getLocalePartsFrom = ({ pathname }: { pathname: string | null }) => {
  if (!pathname)
    return {
      lang: defaultLocale as ValidLocale,
    };
  const pathnameParts = pathname?.toLowerCase().replace('/', '') || defaultLocale;
  if (pathnameParts && locales.includes(pathnameParts as ValidLocale)) {
    return {
      lang: pathnameParts as ValidLocale,
    };
  } else {
    return {
      lang: defaultLocale as ValidLocale,
    };
  }
};

const dictionaries = {
  en: () => import('./dictionaries/en').then((module) => module.default),
  es: () => import('./dictionaries/es').then((module) => module.default),
} as const;

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await import(`./dictionaries/en`).then((module) => module.default);
  type dictType = typeof dictionary;

  const keys = <T>(object: any) => {
    return Object.keys(object) as (keyof T)[];
  };

  if (locales.includes(locale)) {
    const dictionary: dictType = await import(`./dictionaries/${locale}`).then((module) => module.default);
    return { dictionary, keys };
  } else {
    const dictionary: dictType = await import(`./dictionaries/${defaultLocale}`).then((module) => module.default);
    return { dictionary, keys };
  }
};

export const varToStr = (translation: string, params?: { [key: string]: string | number }) => {
  if (params && Object.entries(params).length) {
    Object.entries(params).forEach(([key, value]) => {
      translation = translation!.replace(`{{ ${key} }}`, String(value));
    });
  }
  return translation;
};
