import React, { FC, ReactNode } from 'react';

export interface AssistiveTextProps {
  hasError: boolean;
  defaultText: string;
  errorText?: string;
}

const AssistiveText: FC<AssistiveTextProps> = ({ hasError, defaultText, errorText }): JSX.Element => {
  return (
    <div>
      {hasError ? (
        <span className="text-semantic-error">{errorText}</span>
      ) : (
        <span className="text-neutral-400">{defaultText}</span>
      )}
    </div>
  );
};

export default AssistiveText;
