import { useEffect, RefObject, useCallback } from 'react';

export const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, callback: (event: MouseEvent) => void) => {
  const listener = useCallback(
    (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      callback(event);
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
  }, [listener]);
};
