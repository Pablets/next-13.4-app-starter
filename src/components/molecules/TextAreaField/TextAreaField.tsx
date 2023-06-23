import AssistiveText from '@/components/atoms/AssistiveText/AssistiveText';
import Label from '@/components/atoms/Label/Label';
import StatusIndicator from '@/components/atoms/StatusIndicator/StatusIndicator';
import TextArea from '@/components/atoms/TextArea/TextArea';
import { nanoid } from 'nanoid';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  ForwardRefRenderFunction,
  forwardRef,
  useRef,
  useState,
} from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface TextAreaProps {
  value?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
  label: string;
  hasError?: boolean;
  errorText: string;
  defaultText: string;
  name: string;
  inputId: string;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
}

const TextAreaField: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { value, onChange, label, name, errorText, defaultText, required, register, hasError = false, inputId = nanoid() },
  textAreaRef,
): JSX.Element => {
  const [innerValue, setInnerValue] = useState(value);
  const [error, setError] = useState(false);

  // const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValueIsValid = !e.target.validity.patternMismatch;
    if (error) {
      if (newValueIsValid) {
        setError(false);
      }
    }
    onChange(e);
    setInnerValue(e.target.value);
  };

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    if (!error) {
      if (!event?.target?.validity?.valid) {
        // textAreaRef.current?.focus();
        setError(true);
      }
    }
  };

  return (
    <div>
      <div className="min-h-7">
        <TextArea
          {...((register && register(name)) || {})}
          ref={textAreaRef}
          name={name}
          id={inputId}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
        />
        <Label htmlFor={inputId} innerValue={innerValue}>
          {label}
        </Label>
        <StatusIndicator hasError={hasError || error} />
      </div>
      <AssistiveText hasError={error || hasError} defaultText={defaultText} errorText={errorText} />
    </div>
  );
};

export default forwardRef(TextAreaField);
