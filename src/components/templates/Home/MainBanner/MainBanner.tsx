import Container from '@/components/organisms/Container/Container';
import LinkButton from '@/components/atoms/Link/LinkButton';
import Text from '@/components/atoms/Text/Text';
import Image from 'next/image';
import React, { FC } from 'react';

export interface MainBannerProps {
  title: string;
  description: string;
  btnLabel: string;
}

const MainBanner: FC<MainBannerProps> = ({ title, description, btnLabel }): JSX.Element => {
  return (
    <Container firstChild>
      <div className="col-span-4 col-start-3 row-start-2 justify-self-end sm:col-span-2 sm:col-start-1 sm:row-start-1 md:justify-self-center"></div>
      <div className="col-span-8 col-start-3 row-start-1 h-auto">
        <div className="mb-7">
          <Text typography="h1" className="text-center font-semibold">
            {title}
          </Text>
        </div>
        <div className="mb-14">
          <Text typography="base" className="text-center font-body">
            {description}
          </Text>
        </div>
      </div>
      <div className="col-span-4 col-start-7 row-start-2 self-end sm:col-span-2 sm:col-start-11 sm:row-start-1 md:justify-self-center ">
        <div className="mb-12 h-auto w-32 sm:mb-0 sm:w-full"></div>
      </div>
      {/* <div className="col-span-12 row-start-3 h-auto md:row-start-2"> */}
      <div className="col-span-12 row-start-3 h-auto justify-self-center md:row-start-2">
        {/* <LinkButton href="#contact-form" variant="primary"> */}
        <LinkButton href="#contact-form" variant="primary">
          {btnLabel}
        </LinkButton>
      </div>
    </Container>
  );
};

export default MainBanner;
