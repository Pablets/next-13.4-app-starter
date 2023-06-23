import React, { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from 'react';
import type { VariantProps } from '@/lib/cva';
import { inputVariants } from './style';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ searchVariant, className, ...props }, ref) => {
  return <input {...props} ref={ref} className={twMerge(inputVariants({ searchVariant, className }))} />;
};

export default forwardRef(Input);
