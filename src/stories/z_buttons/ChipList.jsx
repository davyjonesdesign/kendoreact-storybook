// ChipList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { ChipList as KendoChipList, Chip } from "@progress/kendo-react-buttons";
import '../assets/index.scss';

/**
 * ChipList component wraps Kendo UI's ChipList with customizable styling and behavior.
 * 
 * @param {Object} props - Component props
 * @param {string} fillMode - Visual style: 'solid' or 'outline' 
 * @param {boolean} removable - Whether chips can be removed with X button
 * @param {string} selection - Selection mode: 'single', 'multiple', or 'none'
 * @param {Array} data - Array of chip data objects with text and value
 * @param {Function} onChange - Callback when selection changes
 * @param {Function} onRemove - Callback when chip is removed
 */
export const ChipList = ({ fillMode = 'solid', customChip, removable, ...props }) => {
  const fruits = [
    {
      text: "Berry",
      value: "berry",
    },
    {
      text: "Apple",
      value: "apple",
    },
    {
      text: "Strawberry",
      value: "strawberry",
    },
    {
      text: "Banana",
      value: "banana",
    },
    {
      text: "Kiwi",
      value: "kiwi",
    },
  ];

  // Custom chip component with fillMode and removable control
  const ChipWithFillMode = (chipProps) => {
    return (
      <Chip 
        {...chipProps} 
        fillMode={fillMode}
        removable={removable}
      />
    );
  };

  return (
    <KendoChipList 
      {...props}
      defaultData={fruits}
      chip={customChip || ChipWithFillMode}
    />
  );
};

ChipList.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  chip: PropTypes.element,
  className: PropTypes.string,
  data: PropTypes.any,
  defaultData: PropTypes.array,
  defaultValue: PropTypes.any,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline']), // Add fillMode prop
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  removable: PropTypes.bool,
  required: PropTypes.bool,
  selection: PropTypes.oneOf(['single', 'multiple', 'none']),
  tabIndex: PropTypes.number,
  textField: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  validityStyles: PropTypes.bool,
  value: PropTypes.any,
  valueField: PropTypes.string,
  customChip: PropTypes.func
};

ChipList.defaultProps = {
  selection: 'none',
  fillMode: 'solid'
};