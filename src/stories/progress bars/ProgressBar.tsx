import * as React from 'react';
import { ProgressBar as KendoProgressBar } from "@progress/kendo-react-progressbars";
import '../assets/index.scss';

interface ProgressBarProps {
  animation?: boolean;
  ariaLabel?: string;
  className?: string;
  dir?: 'rtl' | 'ltr' | 'auto';
  disabled?: boolean;
  emptyClassName?: string;
  emptyStyle?: React.CSSProperties;
  label?: React.ComponentType<any>;
  labelPlacement?: 'center' | 'end' | 'start';
  labelVisible?: boolean;
  max?: number;
  min?: number;
  orientation?: 'horizontal' | 'vertical';
  progressClassName?: string;
  progressStyle?: React.CSSProperties;
  reverse?: boolean;
  style?: React.CSSProperties;
  tabIndex?: number;
  value?: number;
  [key: string]: any; // for other KendoProgressBar props
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  min = 0,
  max = 100,
  value = 55,
  ...props 
}) => {
  return (
    <>
      <KendoProgressBar 
        min={min}
        max={max}
        value={value}
        {...props} 
      />
    </>
  );
};
