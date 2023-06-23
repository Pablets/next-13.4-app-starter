import React, { FC, ForwardRefRenderFunction, InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  { ...props },
  ref,
) => {
  return <textarea rows={4} cols={20} ref={ref} className="min-h-7 peer mt-[5px]" {...props} />;
};

export default forwardRef(Textarea);
