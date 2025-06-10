import React, { useState } from 'react';
import { Button } from './Button';
import { Switch } from '@progress/kendo-react-inputs';
import './assets/index.scss';

export default {
  title: 'Buttons/All Variants',
  component: Button,
};

const fillModes = ['solid', 'outline', 'link'];
const sizes = ['medium', 'large'];

const variants = [
  { label: 'Default', props: {} },
  { label: 'With Icon', props: { icon: 'letter-space' } },
  { label: '', props: { icon: 'letter-space' } }, // icon-only, no label!
];

export const AllVariants = () => {
  const [disabledStates, setDisabledStates] = useState({
    medium: false,
    large: false,
  });

  const handleToggle = (size) => {
    setDisabledStates((prev) => ({
      ...prev,
      [size]: !prev[size],
    }));
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {sizes.map((size) => (
        <div key={size}>
          {/* Header with Toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>
              {size.charAt(0).toUpperCase() + size.slice(1)} Buttons
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>Disabled</span>
              <Switch
                checked={disabledStates[size]}
                onChange={() => handleToggle(size)}
                className='w-switch-small'
              />
            </div>
          </div>

          {/* Fill Mode Rows */}
          {fillModes.map((mode) => (
            <div key={mode} style={{ marginBottom: '1.5rem' }}>
              <h4 style={{
                textTransform: 'capitalize',
                marginBottom: '0.5rem',
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              }}>
                {mode}
              </h4>
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                {variants.map(({ label, props }, index) => (
                  <div
                    key={`${mode}-${size}-${index}`}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <Button
                      fillMode={mode}
                      size={size}
                      disabled={disabledStates[size]}
                      label={label}
                      {...props}
                    />
                    
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
