import * as React from 'react';
import { DateInput as KendoDateInput } from "@progress/kendo-react-dateinputs";
import '../assets/index.scss';

interface DateInputProps {
  ariaControls?: string;
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: boolean;
  ariaLabel?: string;
  ariaLabeledBy?: string;
  ariaRole?: string;
  className?: string;
  defaultValue?: Date;
  dir?: 'rtl' | 'ltr' | 'auto';
  disabled?: boolean;
  fillMode?: 'flat' | 'outline' | 'solid' | null;
  format?: string;
  formatPlaceholder?: 'wide' | 'narrow' | 'short' | 'formatPattern';
  id?: string;
  label?: string;
  max?: Date;
  min?: Date;
  maxTime?: Date;
  minTime?: Date;
  name?: string;
  placeholder?: string;
  required?: boolean;
  rounded?: 'small' | 'medium' | 'full' | 'large' | null;
  size?: 'small' | 'medium' | 'large' | null;
  spinners?: boolean;
  steps?: any;
  tabIndex?: number;
  title?: string;
  valid?: boolean;
  validationMessage?: string;
  validityStyles?: boolean;
  value?: Date;
  width?: string | number;
  [key: string]: any; // for other KendoDateInput props
}

export const DateInput: React.FC<DateInputProps> = ({
  width = 200,
  ...props 
}) => {
  return (
    <>
      <KendoDateInput width={width} {...props}/>
    </>
  );
};
