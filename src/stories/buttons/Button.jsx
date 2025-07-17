import React from 'react';
import PropTypes from 'prop-types';
import { Button as KendoButton } from "@progress/kendo-react-buttons";

import '../assets/index.scss';

export const Button = ({ label, icon, showIcon, ...props }) => {
  const hasLabel = typeof label === 'string' && label.trim() !== '';

  return (
    hasLabel ? (
      <KendoButton
        themeColor="primary"
        rounded="full"
        {...props}
      >
        {showIcon && (
          <span className={`w-icon k-icon k-font-icon k-button-icon w-i-${icon}`} />
        )}
        {label}
      </KendoButton>
    ) : (
      <KendoButton
        themeColor="primary"
        rounded="full"
        {...props}
      >
        {showIcon && (
          <span className={`w-icon w-i-${icon}`} />
        )}
      </KendoButton>
    )
  );
};

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline', 'link']),
  size: PropTypes.oneOf(['medium', 'large']),
  icon: PropTypes.string,
  togglable: PropTypes.bool,
  selected: PropTypes.bool
};

Button.defaultProps = {
  label: undefined
};
