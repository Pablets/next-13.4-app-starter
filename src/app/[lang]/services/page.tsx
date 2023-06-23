import Container from '@/components/organisms/Container/Container';
import { ValidLocale, getTranslator } from '../../../i18n';
import Text from '@/components/atoms/Text/Text';

export default async function Demo({ params }: { params: { lang: ValidLocale } }) {
  const { dictionary } = await getTranslator(params.lang);
  return (
    <Container>
      <div className="col-span-4">
        <Text typography="l" className="text-white">
          dictionary.aboutUsPage.ABOUT.IMAGE_DESCRIPTION
        </Text>
      </div>
    </Container>
  );
}
