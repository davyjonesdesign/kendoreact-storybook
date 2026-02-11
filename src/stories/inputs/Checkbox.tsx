import * as React from 'react';
import { Checkbox as KendoCheckbox } from "@progress/kendo-react-inputs";
import '../assets/index.scss';

interface CheckboxProps {
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  checked?: boolean;
  children?: React.ReactNode;
  className?: string;
  defaultChecked?: boolean;
  defaultValue?: any;
  dir?: 'ltr' | 'rtl' | 'auto';
  disabled?: boolean;
  id?: string;
  label?: string;
  labelOptional?: boolean;
  labelPlacement?: 'after' | 'before';
  name?: string;
  required?: boolean;
  rounded?: 'small' | 'medium' | 'large' | null;
  size?: 'small' | 'medium' | 'large' | null;
  tabIndex?: number;
  valid?: boolean;
  validationMessage?: string;
  validityStyles?: boolean;
  value?: string | number | boolean | null;
  [key: string]: any; // for other KendoCheckbox props
}

export const Checkbox: React.FC<CheckboxProps> = ({...props }) => {
  return (
    <>
      <KendoCheckbox {...props} />
    </>
  );
};
