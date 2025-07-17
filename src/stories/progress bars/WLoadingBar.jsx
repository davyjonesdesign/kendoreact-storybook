import React, { useEffect, useRef, useState } from 'react';
import { ProgressBar } from './ProgressBar';

export const WLoadingBar = (props) => {
  const [value, setValue] = useState(0);
  const start = useRef(null);

  useEffect(() => {
    let frame;
    const duration = 5000; // 5 seconds

    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function variableSpeed(t) {
      if (t < 0.6) {
        return t * 1.2;
      }
      return 0.72 + (t - 0.6) * 0.7;
    }

    function animate(ts) {
      if (!start.current) start.current = ts;
      const elapsed = ts - start.current;
      let t = Math.min(elapsed / duration, 1);
      t = variableSpeed(t);
      t = Math.min(t, 1);
      setValue(Math.round(easeInOutCubic(t) * 100));
      if (t < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <ProgressBar
      {...props}
      value={value}
      animation={true}
      labelVisible={false}
      className="w-loading-bar"
      ariaLabel="Loading bar"
    />
  );
};