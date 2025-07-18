import React from 'react';
import { Button } from './Button';
import customIcons from '../assets/IconsList';

const meta = {
  title: 'Base Kendo Components/Buttons/Button',
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
    icon: {
      control: { type: 'select' },
      options: customIcons,
    },
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
  <Button {...args} />
);

export const Solid = {
  args: {
    label: 'Solid',
    fillMode: 'solid',
    disabled: false,
    size: "medium",
    icon: "plus",
    togglable: false,
    selected: false,
    toggled: false
  },
  render: (args) => <IconButton {...args} />,
};

export const Outline = {
  args: {
    label: 'Outline',
    fillMode: 'outline',
    disabled: false,
    size: "medium",
    icon: "plus",
    togglable: false,
    selected: false,
    toggled: false
  },
  render: (args) => <IconButton {...args} />,
};

export const Link = {
  args: {
    label: 'Link',
    fillMode: 'link',
    disabled: false,
    size: "medium",
    icon: "plus",
    togglable: false,
    selected: false,
    toggled: false    

  },
  render: (args) => <IconButton {...args} />,
};

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  showIcon: true,
  icon: 'plus',
};
