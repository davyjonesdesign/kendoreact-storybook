import * as React from 'react';
import { Chip as KendoChip } from "@progress/kendo-react-buttons";
import '../assets/index.scss';

interface ChipProps {
  label?: string;
  className?: string;
  dir?: 'rtl' | 'ltr' | 'auto';
  disabled?: boolean;
  fillMode?: 'solid' | 'outline';
  themeColor?: 'base' | 'info' | 'success' | 'warning' | 'error';
  removable?: boolean;
  removeIcon?: string;
  selected?: boolean;
  text?: string;
  value?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({label = 'Chip Component', ...props}) => {
  return (
    <>
      <KendoChip size="medium" rounded="medium" {...props}> {label} </KendoChip>
    </>
  );
};
