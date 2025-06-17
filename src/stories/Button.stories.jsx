import React from 'react';
import { Button } from './Button';

const meta = {
  title: '1 Micro Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'], // Enables auto-generated Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component for primary user interactions.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    fillMode: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'link'],
    },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    togglable: { control: 'boolean' },
    toggled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['medium', 'large'],
    },
  },
};

export default meta;

// Shared render function
const IconButton = (args) => (
  <Button {...args} icon="letter-space" />
);

export const Solid = {
  args: {
    label: 'Solid',
    fillMode: 'solid',
    size: 'medium',
    disabled: false,
  },
  render: (args) => <IconButton {...args} />,
};

export const Outline = {
  args: {
    label: 'Outline',
    fillMode: 'outline',
    size: 'medium',
    disabled: false,
  },
  render: (args) => <IconButton {...args} />,
};

export const Link = {
  args: {
    label: 'Link',
    fillMode: 'link',
    size: 'medium',
    disabled: false,
  },
  render: (args) => <IconButton {...args} />,
};
