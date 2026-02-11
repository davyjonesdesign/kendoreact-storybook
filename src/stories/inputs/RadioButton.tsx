import * as React from 'react';
import { RadioButton as KendoRadioButton } from "@progress/kendo-react-inputs";
import '../assets/index.scss';

interface RadioButtonProps {
  ariaDescribedBy?: string;
  checked?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  index?: number;
  label?: string;
  labelPlacement?: 'after' | 'before';
  name?: string;
  size?: 'small' | 'medium' | 'large' | null;
  style?: React.CSSProperties;
  tabIndex?: number;
  valid?: boolean;
  value?: any;
  [key: string]: any; // for other KendoRadioButton props
}

export const RadioButton: React.FC<RadioButtonProps> = ({...props }) => {
  return (
    <>
      <KendoRadioButton {...props} />
    </>
  );
};
