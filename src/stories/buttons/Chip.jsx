import React from 'react';
import PropTypes from 'prop-types';
import { Chip as KendoChip } from "@progress/kendo-react-buttons";
import '../assets/index.scss';

export const Chip = ({label, ...props }) => {
  return (
    <>
      <KendoChip size="medium" rounded="medium" {...props}> {label} </KendoChip>
    </>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline']),
  themeColor: PropTypes.oneOf(['base', 'info', 'success', 'warning', 'error']),
  removable: PropTypes.bool,
  removeIcon: PropTypes.string,
  selected: PropTypes.bool,
  text: PropTypes.string,
  value: PropTypes.node
};

Chip.defaultProps = {
  label: 'Chip Component'
};
