import { getTranslator, ValidLocale } from '../../i18n';
import { getCMSLocale } from '@/utils/localeHelper';
import { getAllCustomerReviews } from '@/data/apollo/customerReview/customerReview';
import MainBanner from '@/components/templates/Home/MainBanner/MainBanner';
import ContactForm from '@/components/templates/Home/ContacForm/ContactForm';

interface ICustomerReview {
  items: Entity.ICustomerReview[];
  limit: number;
  skip: number;
  total: number;
}

const customerReviewsResponse = async (locale: string) => {
  const cmsLocale = getCMSLocale(locale);
  return new Promise<ICustomerReview>((resolve) => resolve(getAllCustomerReviews({ locale: cmsLocale })));
};

export default async function HomePage({ params }: { params: { lang: ValidLocale } }) {
  const { dictionary } = await getTranslator(params.lang);
  const reviews = await customerReviewsResponse(params.lang);

  return (
    <>
      <MainBanner
        title={dictionary.homePage.MAIN.TITLE}
        description={dictionary.homePage.MAIN.DESCRIPTION_DESKTOP}
        btnLabel={dictionary.homePage.MAIN.BTN_PRIMARY}
      />
      <ContactForm />
    </>
  );
}
