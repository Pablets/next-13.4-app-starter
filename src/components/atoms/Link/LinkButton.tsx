import React from 'react';
import Link, { LinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';
import { VariantProps } from '@/lib/cva';
import { buttonVariants } from './style';

interface LinkButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children?: React.ReactNode;
  variant: VariantProps<typeof buttonVariants>['variant'];
}

const LinkButton = ({ className, children, variant = 'primary', ...linkProps }: LinkButtonProps) => {
  return (
    <Link className={twMerge(buttonVariants({ variant, className }))} {...linkProps}>
      {variant === 'gradient' || variant === 'light' ? (
        <span className="absolute left-0 top-0 z-20 inline-flex h-full w-full min-w-max items-center justify-center">
          {children}
        </span>
      ) : (
        <>{children}</>
      )}
    </Link>
  );
};

export default LinkButton;
