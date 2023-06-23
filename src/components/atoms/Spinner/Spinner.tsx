import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
  width?: string;
}

const Spinner: FC<SpinnerProps> = ({ height, width, ...props }: SpinnerProps): JSX.Element => {
  const { className, ...rest } = props;
  return (
    <div
      className={`
			${width ? `w-[${width}]` : 'w-full'}
			${height ? `h-[${height}]` : 'h-full'}
			flex items-center justify-center bg-gray-200
			${className}
			`}
      {...rest}
    >
      <div className="flex h-full w-full items-center justify-center bg-gray-200">
        <div className="flex h-14 w-14 animate-spin items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500">
          <div className="h-9 w-9 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
