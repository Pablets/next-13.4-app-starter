import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './style';
import type { VariantProps } from '@/lib/cva';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({ className, variant, arrowButton, ...props }) => (
  <button className={twMerge(buttonVariants({ variant, arrowButton, className }))} {...props}>
    <span className="absolute left-0 top-0 z-20 inline-flex h-full w-full items-center justify-center">
      {props.children}
    </span>
  </button>
);

export default Button;
