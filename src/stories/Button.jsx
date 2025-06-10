import React from 'react';
import PropTypes from 'prop-types';
import { Button as KendoButton } from "@progress/kendo-react-buttons";
import './assets/index.scss';

export const Button = ({ label, ...props }) => {
  const hasLabel = typeof label === 'string' && label.trim() !== '';

  return (
    hasLabel ? (
      <KendoButton
        themeColor="primary"
        rounded="full"
        {...props}
      >
        {label}
      </KendoButton>
    ) : (
      <KendoButton
        themeColor="primary"
        rounded="full"
        {...props}
      />
    )
  );
};

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  fillMode: PropTypes.oneOf(['solid', 'outline', 'link']),
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  imageAlt: PropTypes.string,
  iconUrl: PropTypes.string,
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
  togglable: PropTypes.bool
};

Button.defaultProps = {
  label: undefined
};
