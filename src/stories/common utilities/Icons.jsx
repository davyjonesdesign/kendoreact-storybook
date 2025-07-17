import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@progress/kendo-react-common';
import '../assets/index.scss';
import customIcons from '../assets/IconsList';


const Icons = ({ className, size, themeColor, iconName }) => {
  const iconsToRender = iconName ? [iconName] : customIcons;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      {iconsToRender.map((name) => (
          <div style={{ display: 'flex', justifyContent: 'center', minWidth: '20%', marginBottom: '4rem' }}>
            <Icon
              name={name}
              size={size}
              themeColor={themeColor}
              className={`w-icon w-i-${name} k-i-${name} ${className || ''}`.trim()}
              aria-hidden="true"
            />
          </div>
      ))}
    </div>
  );
};

Icons.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'xsmall', 'small', 'medium', 'large', 'xlarge']),
  themeColor: PropTypes.oneOf([
    'primary', 'secondary', 'error', 'info', 'success', 'warning',
    'dark', 'light', 'inverse'
  ]),
  iconName: PropTypes.string,
};

Icons.defaultProps = {
  size: 'xlarge',
  themeColor: 'primary',
};


export default Icons;
