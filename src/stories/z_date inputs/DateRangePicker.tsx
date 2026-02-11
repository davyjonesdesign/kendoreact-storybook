import * as React from 'react';
import { DateRangePicker as KendoDateRangePicker, SelectionRange } from "@progress/kendo-react-dateinputs";
import '../assets/index.scss';

interface DateRangePickerProps {
  allowReverse?: boolean;
  ariaDescribedBy?: string;
  ariaLabeledBy?: string;
  calendar?: any;
  calendarSettings?: any;
  className?: string;
  defaultShow?: boolean;
  defaultValue?: any;
  disabled?: boolean;
  endDateInput?: React.ComponentType<any>;
  endDateInputSettings?: any;
  focusedDate?: Date;
  format?: string;
  id?: string;
  max?: Date;
  min?: Date;
  popup?: React.ComponentType<any>;
  popupSettings?: any;
  show?: boolean;
  startDateInput?: React.ComponentType<any>;
  startDateInputSettings?: any;
  style?: React.CSSProperties;
  swapButton?: boolean;
  tabIndex?: number;
  valid?: boolean;
  value?: SelectionRange;
  [key: string]: any; // for other KendoDateRangePicker props
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({...props}) => {
  return (
    <>
      <KendoDateRangePicker {...props} />
    </>
  );
};
