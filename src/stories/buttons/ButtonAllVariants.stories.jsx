import React, { useState } from 'react';
import { Button } from './Button';
import { Switch } from '@progress/kendo-react-inputs';
import '../assets/index.scss';

export default {
  title: 'Base Kendo Components/Buttons/Button/All Variants',
  component: Button,
};

const fillModes = ['solid', 'outline', 'link'];
const sizes = ['medium', 'large'];

const variants = [
  { label: 'Solid', props: {} },
  { label: 'With Icon', props: { icon: 'letter-space' } },
  { label: '', props: { icon: 'letter-space' } }, // icon-only, no label!
];

export const AllVariants = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

      {sizes.map((size) => (
        <div key={size}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '2rem',
              justifyContent: 'space-between'
            }}
          >
            <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>
              {size.charAt(0).toUpperCase() + size.slice(1)} Buttons
            </h4>
            {size === 'medium' && (
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
                <span style={{ fontSize: '0.875rem', color: '#666', marginRight: '0.5rem' }}>Disabled</span>
                <Switch
                  checked={disabled}
                  onChange={() => setDisabled((prev) => !prev)}
                  className='w-switch-small'
                />
              </div>
            )}
          </div>

          {/* Grid for Fill Modes and Variants */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `80px repeat(${variants.length}, 1fr)`,
              gap: '16px 40px',
              alignItems: 'center',
              marginBottom: '2rem'
            }}
          >
            {/* Fill Mode Rows */}
            {fillModes.map((mode) => (
              <React.Fragment key={mode}>
                <div style={{
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontSize: '12px',
                  color: '#666',
                  minWidth: '60px'
                }}>
                  {mode}
                </div>
                {variants.map(({ label, props }, index) => (
                  <div
                    key={`${mode}-${size}-${index}`}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <Button
                      fillMode={mode}
                      size={size}
                      disabled={disabled}
                      label={label}
                      {...props}
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
