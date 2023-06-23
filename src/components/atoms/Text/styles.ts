import { cva } from '@/lib/cva';

// export interface ConfigurationVariant {
//   'fontFamily': 'POPPINS' | 'OPEN-SANS',
//   'fontWeight': '400' | '600' | '700',
//   'fontSize': '12' | '16' | '20' | '24' | '32' | '40' | '48',
//   'lineHeight': '56' | '48' | '40' | '24' | '28' | '32' | '16',
// }

export const textVariants = cva('text-white', {
  variants: {
    typography: {
      h1: 'text-6xl font-display',
      h2: 'text-5xl font-display',
      h3: 'text-4xl font-display',
      h4: 'text-3xl font-display',
      h5: 'text-2xl font-display',
      h6: 'text-xl font-display',
      span: 'text-sm font-display',
      l: 'text-lg font-body',
      base: 'text-base font-body',
      s: 'text-sm font-body',
      xs: 'text-xs font-body',
    },
  },
  defaultVariants: {
    typography: 'base',
  },
});
