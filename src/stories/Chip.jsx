import React from 'react';
import PropTypes from 'prop-types';
import { Chip as KendoChip } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const Chip = ({label, ...props }) => {
  return (
    <>
      <KendoChip size="medium" rounded="medium" {...props}> {label} </KendoChip>
    </>
  );
};

Chip.propTypes = {
  ariaDescribedBy: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  dataItem: PropTypes.node,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline']),
  icon: PropTypes.string,
  id: PropTypes.string,
  removable: PropTypes.bool,
  removeIcon: PropTypes.string,
  selected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  tabIndex: PropTypes.number,
  text: PropTypes.string,
  themeColor: PropTypes.oneOf(['base', 'info', 'success', 'warning', 'error']),
  value: PropTypes.node
};

Chip.defaultProps = {
  label: 'Chip Component'
};
