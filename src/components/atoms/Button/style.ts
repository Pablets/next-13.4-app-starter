import { cva } from '@/lib/cva';

export const buttonVariants = cva(
  ['w-fit', 'rounded-xl', 'p-3', 'relative', 'text-white', 'font-body', 'h-12', 'transition-all', 'duration-300'],
  {
    variants: {
      variant: {
        primary: /* tw */ ['before:absolute', 'min-w-[120px]'],
        secondary: /* tw */ ['hover:bg-transparent', 'after:w-full', 'h-10', 'leading-4'],
        gradient: /* tw */ ['after:absolute', 'after:bg-white'],
        pagination: /* tw */ ['text-black'],
      },
      arrowButton: {
        true: 'h-fit after:bg-transparent',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      arrowButton: false,
    },
  },
);
