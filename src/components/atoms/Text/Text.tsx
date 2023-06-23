import sanitizeHtml from 'sanitize-html';
import { FC, HTMLAttributes, createElement } from 'react';
import { type VariantProps } from '@/lib/cva';
import { textVariants } from './styles';
import { twMerge } from 'tailwind-merge';

type TextVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'l' | 'base' | 's' | 'xs';

const typographyHelper = (text: TextVariants) => {
  return ['l', 'base', 's', 'xs'].includes(text) ? 'p' : text;
};

export interface TextProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  children: string;
  typography: Required<VariantProps<typeof textVariants>['typography']>;
}

const Text: FC<TextProps> = ({ children, typography, className, ...props }) => {
  return createElement(typographyHelper(typography!), {
    dangerouslySetInnerHTML: {
      __html: sanitizeHtml(children),
    },
    className: twMerge(textVariants({ typography, className })),
    ...props,
  });
};

export default Text;
