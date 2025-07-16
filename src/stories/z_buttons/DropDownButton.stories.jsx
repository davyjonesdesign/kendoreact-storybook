import React from 'react';
import { DropDownButton } from './DropDownButton';

const meta = {
  title: 'Buttons/DropDown Button',
  component: DropDownButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A button with an integrated dropdown menu for grouped actions.',
      },
    },
  },
  argTypes: {
    text: { control: 'text' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    fillMode: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
    },
  },
};

export default meta;

// Shared render function
const Template = (args) => <DropDownButton {...args} />;

export const Primary = {
  args: {
    text: 'Options',
    disabled: false,
    fillMode: 'solid',
    size: 'medium',
  },
  render: (args) => <Template {...args} />,
};

export const Disabled = {
  args: {
    text: 'Disabled',
    disabled: true,
    fillMode: 'solid',
    size: 'medium',
  },
  render: (args) => <Template {...args} />,
};

export const Icon = {
  args: {
    text: 'With Icon',
    icon: 'border-style-bottom',
    disabled: false,
    fillMode: 'solid',
    size: 'medium',
  },
  render: (args) => <Template {...args} />,
};
