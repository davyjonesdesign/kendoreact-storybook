import * as React from 'react';
import { DateTimePicker as KendoDateTimePicker } from "@progress/kendo-react-dateinputs";
import '../assets/index.scss';

interface DateTimePickerProps {
  ariaDescribedBy?: string;
  ariaLabeledBy?: string;
  calendar?: any;
  cancelButton?: boolean;
  className?: string;
  dateInput?: React.ComponentType<any>;
  defaultShow?: boolean;
  defaultValue?: Date;
  disabled?: boolean;
  fillMode?: 'flat' | 'outline' | 'solid';
  focusedDate?: Date;
  formatPlaceholder?: any;
  format?: string;
  id?: string;
  label?: string;
  max?: Date;
  maxTime?: Date;
  min?: Date;
  minTime?: Date;
  name?: string;
  placeholder?: string;
  popup?: React.ComponentType<any>;
  required?: boolean;
  rounded?: 'small' | 'medium' | 'full' | 'large';
  show?: boolean;
  size?: 'small' | 'medium' | 'large';
  tabIndex?: number;
  title?: string;
  valid?: boolean;
  validationMessage?: string;
  validityStyles?: boolean;
  value?: Date;
  weekNumber?: boolean;
  width?: string | number;
  [key: string]: any; // for other KendoDateTimePicker props
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  width = 300,
  ...props 
}) => {
  return (
    <>
      <KendoDateTimePicker width={width} {...props} />
    </>
  );
};
