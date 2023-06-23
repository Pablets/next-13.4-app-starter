import React from 'react';

export default function useModal(initialState: boolean = false) {
  // State
  const [isOpen, setIsOpen] = React.useState<boolean>(initialState);

  // Handlers
  const open = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = React.useCallback(() => {
    setIsOpen((s) => !s);
  }, []);

  const out = {
    isOpen,
    open,
    close,
    toggle,
  };

  return out;
}
