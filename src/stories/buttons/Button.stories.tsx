import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';
import customIcons from '../assets/IconsList';

const meta = {
  title: 'Base Kendo Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
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
      options: ['solid', 'outline', 'link'] as const,
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
      options: ['medium', 'large'] as const,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    label: 'Solid',
    fillMode: 'solid',
    disabled: false,
    size: "medium",
    icon: "plus",
    togglable: false,
    selected: false,
    showIcon: true
  }
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    fillMode: 'outline',
    disabled: false,
    size: "medium",
    icon: "plus",
    togglable: false,
    selected: false,
    showIcon: true
  }
};

export const Link: Story = {
  args: {
    label: 'Link',
    fillMode: 'link',
    disabled: false,
    size: "medium",
    icon: "plus",
    togglable: false,
    selected: false,
    showIcon: true
  }
};
