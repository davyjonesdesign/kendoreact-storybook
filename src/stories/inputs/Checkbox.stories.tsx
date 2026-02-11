import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Base Kendo Components/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {}
};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
};

export const WithLabel: Story = {
  args: {
    label: "Yes, I'd like to subscribe",
  }
};

// AllVariants story for documentation
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 60 }}>
      <Checkbox label="Default" defaultChecked={false} />
      {/* Wrap the disabled checkbox in a div with pointer-events: none to prevent hover */}
      <div style={{ pointerEvents: 'none' }}>
        <Checkbox label="Disabled" disabled defaultChecked={false} />
      </div>
      <Checkbox label="Error" valid={false} validationMessage="Error" defaultChecked={false}  />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default, disabled (no hover), error, and error with help text Checkbox variants arranged in a row.',
      },
    },
  }
};
