import * as React from 'react';
import { Button as KendoButton, ButtonGroup as KendoButtonGroup } from "@progress/kendo-react-buttons";
import '../assets/index.scss';

interface ButtonGroupProps {
  dir?: 'rtl' | 'ltr' | 'auto';
  disabled?: boolean;
  width?: string;
  fillMode?: 'solid' | 'outline' | 'flat';
  buttonCount?: number;
  [key: string]: any; // for other KendoButtonGroup props
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ 
  fillMode = 'outline',
  buttonCount = 3,
  ...props 
}) => {
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
