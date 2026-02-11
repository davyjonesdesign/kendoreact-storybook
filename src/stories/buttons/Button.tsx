import * as React from 'react';
import { Button as KendoButton } from "@progress/kendo-react-buttons";
import '../assets/index.scss';

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  fillMode?: 'solid' | 'outline' | 'link';
  size?: 'medium' | 'large';
  icon?: string;
  togglable?: boolean;
  selected?: boolean;
  showIcon?: boolean;
  [key: string]: any; // for other KendoButton props
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  icon, 
  showIcon,
  ...props 
}) => {
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
          <span className={`w-icon k-icon k-font-icon k-button-icon w-i-${icon}`} />
        )}
      </KendoButton>
    )
  );
};
