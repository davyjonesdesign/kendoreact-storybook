import React, { useEffect, useRef, useState } from 'react';
import { ProgressBar } from './ProgressBar';
import type { ProgressBarProps } from '@progress/kendo-react-progressbars';

type WLoadingBarProps = Omit<ProgressBarProps, 'value' | 'animation' | 'labelVisible' | 'className' | 'ariaLabel'> & {
  dir?: 'rtl' | 'ltr' | 'auto';
};

export const WLoadingBar: React.FC<WLoadingBarProps> = (props) => {
  const [value, setValue] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;
    const duration = 5000; // 5 seconds

    function easeInOutCubic(t: number): number {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function variableSpeed(t: number): number {
      if (t < 0.6) {
        return t * 1.2;
      }
      return 0.72 + (t - 0.6) * 0.7;
    }

    function animate(ts: number): void {
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
