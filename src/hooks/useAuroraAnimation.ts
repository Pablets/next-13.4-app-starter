import React from 'react';

export interface UseAuroraAnimationProps {
  filterRef: React.MutableRefObject<any>;
}

const useAuroraAnimation = ({ filterRef }: UseAuroraAnimationProps) => {
  let frames = 0;
  const rad = Math.PI / 180;

  React.useEffect(() => {
    const freqAnimation = () => {
      let bfx = 0.005;
      let bfy = 0.005;
      bfx += 0.0025 * Math.cos(frames * rad);
      bfy += 0.0025 * Math.sin(frames * rad);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      frames += 0.5;
      const bf = bfx.toString() + ' ' + bfy.toString();
      filterRef?.current?.setAttributeNS(null, 'baseFrequency', bf);
      window.requestAnimationFrame(freqAnimation);
    };
    window.requestAnimationFrame(freqAnimation);
  }, []);
};

export default useAuroraAnimation;
