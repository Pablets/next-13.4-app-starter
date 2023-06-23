import React, { FC, LabelHTMLAttributes, PropsWithChildren } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  innerValue?: string;
  visible?: boolean;
}

const Label: FC<PropsWithChildren<LabelProps>> = ({ innerValue, children, visible = true }): JSX.Element => {
  return (
    <label
      data-testid="label"
      className={` peer-focus:scale-[.7] ${innerValue ? '-translate-y-[25%] scale-[.7]' : ''}`}
    >
      {children}
    </label>
  );
};

export default Label;
