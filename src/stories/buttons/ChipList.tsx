import * as React from 'react';
import { ChipList as KendoChipList, Chip, ChipListProps as KendoChipListProps } from "@progress/kendo-react-buttons";
import '../assets/index.scss';

interface ChipData {
  text: string;
  value: string;
}

interface ChipListProps extends Omit<KendoChipListProps, 'data' | 'defaultData'> {
  fillMode?: 'solid' | 'outline';
  disabled?: boolean;
  removable?: boolean;
  selection?: 'single' | 'multiple' | 'none';
  customChip?: React.ComponentType<any>;
  data?: ChipData[];
  defaultData?: ChipData[];
  onChange?: (event: { value: any[] }) => void;
  onRemove?: (event: { target: any; value: any }) => void;
}

const defaultFruits: ChipData[] = [
  { text: "Berry", value: "berry" },
  { text: "Apple", value: "apple" },
  { text: "Strawberry", value: "strawberry" },
  { text: "Banana", value: "banana" },
  { text: "Kiwi", value: "kiwi" },
];

export const ChipList: React.FC<ChipListProps> = ({ 
  selection = 'none',
  fillMode = 'solid', 
  disabled = false,
  customChip, 
  removable, 
  ...props 
}) => {
  // Custom chip component with fillMode and removable control
  const ChipWithFillMode: React.FC<any> = (chipProps) => {
    return (
      <Chip 
        {...chipProps} 
        fillMode={fillMode}
        removable={removable}
        disabled={disabled}
      />
    );
  };

  return (
    <KendoChipList 
      {...props}
      defaultData={defaultFruits}
      chip={customChip || ChipWithFillMode}
    />
  );
};
