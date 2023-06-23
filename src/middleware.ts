import createMiddleware from './middleware/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
};
