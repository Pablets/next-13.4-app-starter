import { cva } from '@/lib/cva';

export const inputVariants = cva(['mt-[5px]', 'peer'], {
  variants: {
    searchVariant: {
      true: /* tw */ 'bg-transparent',
      false: ['h-7', 'leading-[1.75]', 'align-bottom'],
    },
  },
  defaultVariants: {
    searchVariant: false,
  },
});
