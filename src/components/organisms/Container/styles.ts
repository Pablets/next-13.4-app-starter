import { cva } from '@/lib/cva';

export const containerVariants = cva(
  [
    'mx-4',
    'grid',
    'h-auto',
    'max-w-960',
    'grid-cols-12',
    'gap-x-3',
    'gap-y-0',
    'sm:mx-6',
    'sm:gap-x-5',
    'md:mx-auto',
    'md:gap-x-6',
  ],
  {
    variants: {
      firstChild: {
        true: ['mt-12', 'sm:mt-52', 'md:mt-52'],
        false: ['mt-32', 'sm:mt-48', 'md:mt-72'],
      },
      lastChild: {
        true: ['mb-12', 'sm:mb-12', 'md:mb-12'],
        false: ['mb-32', 'sm:mb-48', 'md:mb-72'],
      },
    },
    defaultVariants: {
      firstChild: false,
      lastChild: false,
    },
  },
);
