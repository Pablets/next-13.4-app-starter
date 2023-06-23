'use client';
import AssistiveText from '@/components/atoms/AssistiveText/AssistiveText';
import Input from '@/components/atoms/Input/Input';
import Label from '@/components/atoms/Label/Label';
import StatusIndicator from '@/components/atoms/StatusIndicator/StatusIndicator';
import { nanoid } from 'nanoid';
import React, { ChangeEventHandler, FocusEventHandler, ForwardRefRenderFunction, forwardRef, useState } from 'react';

export interface TextFieldProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  label: string;
  hasError?: boolean;
  errorText: string;
  defaultText?: string;
  name: string;
  pattern?: string;
  inputId?: string;
  type?: 'text' | 'url' | 'email' | 'text';
  required?: boolean;
}

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {
    value,
    onChange,
    onBlur,
    label,
    name,
    errorText,
    defaultText,
    pattern,
    required,
    hasError = false,
    type = 'text',
    inputId = nanoid(),
  },
  inputRef,
): JSX.Element => {
  const [innerValue, setInnerValue] = useState(value);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) onChange(e);
    setInnerValue(e.target.value);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    if (onBlur) onBlur(event);
  };

  return (
    <div>
      <div className="group">
        <Input
          ref={inputRef}
          name={name}
          type={type}
          id={inputId}
          onChange={handleChange}
          pattern={pattern}
          onBlur={handleBlur}
          required={required}
        />
        <Label htmlFor={inputId} innerValue={innerValue}>
          {label}
        </Label>
        <StatusIndicator hasError={hasError} />
      </div>
      <AssistiveText hasError={hasError} defaultText={defaultText || ''} errorText={errorText} />
    </div>
  );
};

export default forwardRef(TextField);
