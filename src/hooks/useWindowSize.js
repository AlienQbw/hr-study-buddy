import { useEffect, useState } from 'react';
export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);
  return dimensions;
};
