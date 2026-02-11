import * as React from 'react';
import { TimePicker as KendoTimePicker } from "@progress/kendo-react-dateinputs";
import '../assets/index.scss';

interface TimePickerProps {
  ariaDescribedBy?: string;
  ariaLabeledBy?: string;
  cancelButton?: boolean;
  className?: string;
  dateInput?: React.ComponentType<any>;
  defaultShow?: boolean;
  defaultValue?: Date;
  disabled?: boolean;
  fillMode?: 'flat' | 'outline' | 'solid';
  format?: string;
  formatPlaceholder?: 'wide' | 'narrow' | 'short' | 'formatPattern';
  id?: string;
  label?: string;
  max?: Date;
  min?: Date;
  name?: string;
  nowButton?: boolean;
  placeholder?: string;
  popup?: React.ComponentType<any>;
  popupSettings?: any;
  required?: boolean;
  rounded?: 'small' | 'medium' | 'full' | 'large';
  show?: boolean;
  size?: 'small' | 'medium' | 'large';
  smoothScroll?: boolean;
  steps?: any;
  tabIndex?: number;
  title?: string;
  valid?: boolean;
  validationMessage?: string;
  validityStyles?: boolean;
  value?: Date;
  width?: string | number;
  [key: string]: any; // for other KendoTimePicker props
}

export const TimePicker: React.FC<TimePickerProps> = ({
  width = 200,
  ...props 
}) => {
  return (
    <>
      <KendoTimePicker width={width} {...props} />
    </>
  );
};
