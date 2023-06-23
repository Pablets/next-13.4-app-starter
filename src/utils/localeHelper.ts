export const getCMSLocale = function getCMSLocale(inputLocale?: string) {
  const targetLocale = inputLocale === 'en' ? 'en-US' : inputLocale;
  return (targetLocale || 'en-US') as Locale;
};
