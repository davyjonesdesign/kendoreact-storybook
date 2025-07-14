import React from 'react';
import { Chip } from './Chip';

export default {
  title: 'Base/Buttons/Chip',
  component: Chip,
  argTypes: {
    text: { control: 'text' },
    fillMode: {
      control: { type: 'radio' },
      options: ['solid', 'outline'],
    },
    disabled: { control: 'boolean' },
    removable: { control: 'boolean' },
  },
};

// Solid Chip story
export const Solid = {
  render: (args) => <Chip {...args} />,
  args: {
    label: 'Solid Chip',
    fillMode: 'solid',
    disabled: false,
    removeIcon: "x",
    removable: true
  },
};

// Outline Chip story
export const Outline = {
  render: (args) => <Chip {...args} />,
  args: {
    label: 'Outline Chip',
    fillMode: 'outline',
    disabled: false,
    removeIcon: "x",
    removable: true
  },
};
