import React from 'react';
import { Chip } from './Chip';

const meta = {
  title: 'Base/Buttons/Chip',
  component: Chip,
  tags: ['autodocs'], // Enables auto-generated Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A Chip component used to represent input, attribute, or action.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    fillMode: {
      control: { type: 'radio' },
      options: ['solid', 'outline'],
    },
    disabled: { control: 'boolean' },
    removable: { control: 'boolean' },
    removeIcon: { control: 'text' },
  },
};

export default meta;

// Shared render function
const ChipTemplate = (args) => <Chip {...args} />;

export const Solid = {
  args: {
    label: 'Solid Chip',
    fillMode: 'solid',
    disabled: false,
    removable: true,
    removeIcon: 'x',
  },
  render: (args) => <ChipTemplate {...args} />,
};

export const Outline = {
  args: {
    label: 'Outline Chip',
    fillMode: 'outline',
    disabled: false,
    removable: true,
    removeIcon: 'x',
  },
  render: (args) => <ChipTemplate {...args} />,
};
