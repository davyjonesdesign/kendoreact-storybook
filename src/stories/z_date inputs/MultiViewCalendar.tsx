import * as React from 'react';
import { MultiViewCalendar as KendoMultiViewCalendar } from "@progress/kendo-react-dateinputs";
import '../assets/index.scss';

type ViewType = 'month' | 'year' | 'decade' | 'century';
type CalendarMode = 'single' | 'multiple' | 'range';

interface MultiViewCalendarProps {
  activeRangeEnd?: 'start' | 'end';
  allowReverse?: boolean;
  ariaDescribedBy?: string;
  ariaLabeledBy?: string;
  bottomView?: ViewType;
  cell?: React.ComponentType<any>;
  className?: string;
  defaultActiveView?: ViewType;
  defaultValue?: Date;
  disabled?: boolean;
  focusedDate?: Date;
  headerTitle?: React.ComponentType<any>;
  id?: string;
  max?: Date;
  min?: Date;
  mode?: CalendarMode;
  tabIndex?: number;
  topView?: ViewType;
  value?: Date;
  views?: number;
  weekCell?: React.ComponentType<any>;
  weekNumber?: boolean;
  [key: string]: any; // for other KendoMultiViewCalendar props
}

export const MultiViewCalendar: React.FC<MultiViewCalendarProps> = ({...props}) => {
  return (
    <>
      <KendoMultiViewCalendar {...props} />
    </>
  );
};
