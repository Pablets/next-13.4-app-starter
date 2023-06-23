import React, { FC, ReactNode } from 'react';
import Container from './Container';

export interface GridStoryHelperProps {}

const GridStoryHelper: FC<GridStoryHelperProps> = ({}): JSX.Element => {
  return (
    <div className="relative z-50 h-screen w-screen border border-red-500">
      <div className="absolute top-0 w-screen bg-yellow-100">
        <Container className="my-0 h-[700px] w-screen border border-green-500 sm:my-0 md:my-0">
          {[...Array(12).keys()].map((n, i) => (
            <div key={i} className="col-span-1 h-screen bg-red-200/20" />
          ))}
        </Container>
      </div>
      <div className="absolute top-0 w-screen">
        <Container className="my-0 h-[700px] w-screen border border-green-500 sm:my-0 md:my-0">
          <div className={`col-span-12 row-span-1 bg-green-500/30`} />
          <div className={`col-span-11 row-span-1 bg-green-500/30`} />
          <div className={`col-span-10 row-span-1 bg-green-500/30`} />
          <div className={`col-span-9 row-span-1 bg-green-500/30`} />
          <div className={`col-span-8 row-span-1 bg-green-500/30`} />
          <div className={`col-span-7 row-span-1 bg-green-500/30`} />
          <div className={`col-span-6 row-span-1 bg-green-500/30`} />
          <div className={`col-span-5 row-span-1 bg-green-500/30`} />
          <div className={`col-span-4 row-span-1 bg-green-500/30`} />
          <div className={`col-span-3 row-span-1 bg-green-500/30`} />
          <div className={`col-span-2 row-span-1 bg-green-500/30`} />
          <div className={`col-span-1 row-span-1 bg-green-500/30`} />
        </Container>
      </div>
    </div>
  );
};

export default GridStoryHelper;
