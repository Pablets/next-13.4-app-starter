import { cva } from '@/lib/cva';

export const buttonVariants = cva(['w-fit', 'inline-block'], {
  variants: {
    variant: {
      primary: ['after:w-full', 'after:h-full', 'before:w-full'],
      secondary: /* tw */ ['before:-z-10', 'hover:bg-ternary-dark'],
      void: '',
      light: /* tw */ ['before:-z-10', 'bg-white', 'text-black', 'min-w-[120px]', 'h-10', 'leading-4'],
      gradient: /* tw */ ['after:absolute', 'py-5', 'px-8'],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
