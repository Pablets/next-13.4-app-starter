import { Metadata, ResolvingMetadata } from 'next';
import './globals.css';
import NavBar from '@/components/organisms/NavBar/NavBar';
import { Open_Sans, Poppins } from 'next/font/google';
import { locales, getLocalePartsFrom, getTranslator, ValidLocale } from '@/i18n';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export async function generateStaticParams() {
  return locales.map((pathname) => getLocalePartsFrom({ pathname }));
}

export async function generateMetadata(
  { params }: { params: { lang: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { dictionary } = await getTranslator(params.lang as ValidLocale);

  const response = await parent;

  return {
    title: dictionary.homePage.HEAD.TITLE,
    description: dictionary.homePage.HEAD.META_DESCRIPTION,
  };
}

export default function RootLayout({ children, params }: { params: { lang: ValidLocale }; children: React.ReactNode }) {
  return (
    <html lang={params.lang}>
      <head />
      <body className={`${poppins.variable} ${openSans.variable} bg-orange-400`}>
        {/* @ts-ignore */}
        <NavBar lang={params.lang} />
        <div className="h-20" />
        {children}
      </body>
    </html>
  );
}
