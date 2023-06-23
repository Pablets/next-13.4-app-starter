import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const delay = 250; // delay after event is "complete" to run callback

  useEffect(() => {
    let timeout: NodeJS.Timeout | number = 0;
    function getDimensions() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    const timeoutHandler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(getDimensions, delay);
    };

    window.addEventListener('resize', timeoutHandler);

    return () => window.removeEventListener('resize', timeoutHandler);
  }, []);

  return { height, width };
};

export default useWindowDimensions;
