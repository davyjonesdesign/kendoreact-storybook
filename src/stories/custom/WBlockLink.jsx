import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as KendoCard,
} from "@progress/kendo-react-layout";

import '../assets/index.scss';

export const Card = ({
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
    <KendoCard orientation={orientation} {...props} className={combinedClassName} style={style}>
      {icon && <div className="card-icon-wrapper">{icon}</div>}
      {children}
    </KendoCard>
  );
};



Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.any,
  type: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error']),
  icon: PropTypes.node,
};

Card.defaultProps = {
  icon: undefined,
  orientation: 'vertical',
  type: 'default',
};
