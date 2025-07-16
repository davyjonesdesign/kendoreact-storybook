import React from 'react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Base Components/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;

export const Default = {
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const WithLabel = {
  args: {
    label: "Yes, I'd like to subscribe",
  },
};

// AllVariants story for documentation
export const AllVariants = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 60 }}>
      <Checkbox {...args} label="Default" defaultChecked={false} />
      {/* Wrap the disabled checkbox in a div with pointer-events: none to prevent hover */}
      <div style={{ pointerEvents: 'none' }}>
        <Checkbox {...args} label="Disabled" disabled defaultChecked={false} />
      </div>
      <Checkbox {...args} label="Error" valid={false} validationMessage="Error" defaultChecked={false}  />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default, disabled (no hover), error, and error with help text Checkbox variants arranged in a row.',
      },
    },
  },
};
