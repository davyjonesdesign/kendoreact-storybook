import React from 'react';
import PropTypes from 'prop-types';
import { Button as KendoButton, ButtonGroup as KendoButtonGroup } from "@progress/kendo-react-buttons";
import '../assets/index.scss';

export const ButtonGroup = ({ fillMode, buttonCount = 3, ...props }) => {
  // Generate buttons based on buttonCount
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= buttonCount; i++) {
      buttons.push(
        <KendoButton key={i} togglable={true} fillMode={fillMode}>
          Button {i}
        </KendoButton>
      );
    }
    return buttons;
  };

  return (
    <>
      <KendoButtonGroup {...props}>
        {renderButtons()}
      </KendoButtonGroup>
    </>
  );
};

ButtonGroup.propTypes = {
  // className: PropTypes.string,
  dir: PropTypes.oneOf(['rtl', 'ltr', 'auto']),
  disabled: PropTypes.bool,
  width: PropTypes.string,
  fillMode: PropTypes.oneOf(['solid', 'outline', 'flat']),
  buttonCount: PropTypes.number
};

ButtonGroup.defaultProps = {
  fillMode: 'outline',
  buttonCount: 3,
  dir: 'auto',
  disabled: false,
};