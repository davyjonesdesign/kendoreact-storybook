import * as React from 'react';
import { DatePicker as KendoDatePicker, DatePickerProps as KendoDatePickerProps } from "@progress/kendo-react-dateinputs";
import '../assets/index.scss';

interface DatePickerProps extends KendoDatePickerProps {
  width?: string | number;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  width = 200,
  ...props 
}) => {
  return (
    <>
      <KendoDatePicker width={width} {...props} />
    </>
  );
};
