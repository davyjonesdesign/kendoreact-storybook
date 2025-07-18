import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as KendoCard,
} from "@progress/kendo-react-layout";


import '../assets/index.scss';

export const Card = ({
  children,
  className,
  style,
  icon,
  ...props
}) => (
  <KendoCard {...props} className={className} style={{ maxWidth: 800, ...style }}>
    {icon && <div className="card-icon-wrapper">{icon}</div>}
    {children}
  </KendoCard>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  // orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.any,
  type: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'warning', 'error']),
  icon: PropTypes.node,
};

Card.defaultProps = {
  icon: undefined,
};
