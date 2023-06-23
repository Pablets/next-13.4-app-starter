import React, { FC } from 'react';

export interface StatusIndicatorProps {
  hasError?: boolean;
}

const StatusIndicator: FC<StatusIndicatorProps> = ({ hasError }): JSX.Element => {
  return <div aria-invalid={hasError} className="after:transition[transform]" />;
};

export default StatusIndicator;
