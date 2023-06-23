import { type VariantProps } from '@/lib/cva';
import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { containerVariants } from './styles';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children, firstChild = false, lastChild = false, className }): JSX.Element => {
  return <div className={twMerge(containerVariants({ firstChild, lastChild, className }))}>{children}</div>;
};

export default Container;
