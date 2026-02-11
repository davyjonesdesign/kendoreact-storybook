import * as React from 'react';
import {
  Card as KendoCard,
} from "@progress/kendo-react-layout";

import '../assets/index.scss';

type CardOrientation = 'horizontal' | 'vertical';
type CardType = 'default' | 'info' | 'success' | 'warning' | 'error';
type Direction = 'ltr' | 'rtl' | 'auto';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  dir?: Direction;
  orientation?: CardOrientation;
  style?: React.CSSProperties;
  type?: CardType;
  icon?: React.ReactNode;
  [key: string]: any; // for other KendoCard props
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  icon,
  type = 'default',
  orientation = 'vertical',
  ...props
}) => {
  const baseClass = orientation === 'horizontal'
    ? 'w-block-link-horizontal'
    : 'w-block-link-vertical';

  const statusClass = type && type !== 'default'
    ? `w-block-link-status w-block-link-${type}`
    : '';

  const combinedClassName = [className, baseClass, statusClass]
    .filter(Boolean)
    .join(' ');

  return (
    <KendoCard 
      orientation={orientation} 
      {...props} 
      className={combinedClassName} 
      style={style}
    >
      {icon && <div className="card-icon-wrapper">{icon}</div>}
      {children}
    </KendoCard>
  );
};
