import * as React from 'react';
import { RadioGroup as KendoRadioGroup } from "@progress/kendo-react-inputs";
import '../assets/index.scss';

interface RadioItem {
  label: string;
  value: string;
}

interface RadioGroupProps {
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  className?: string;
  data?: RadioItem[];
  defaultValue?: any;
  dir?: 'ltr' | 'rtl' | 'auto';
  disabled?: boolean;
  item?: React.ReactNode;
  labelPlacement?: 'after' | 'before';
  layout?: 'horizontal' | 'vertical';
  name?: string;
  style?: React.CSSProperties;
  valid?: boolean;
  value?: any;
  [key: string]: any; // for other KendoRadioGroup props
}

export const RadioGroup: React.FC<RadioGroupProps> = ({...props }) => {
  const data: RadioItem[] = [
    {
      label: "Small",
      value: "small",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "Large",
      value: "large",
    },
  ];

  return (
    <>
      <KendoRadioGroup {...props} data={data} item={undefined}/>
    </>
  );
};
