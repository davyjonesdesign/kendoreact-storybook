import React from 'react';
import { ButtonGroup } from './ButtonGroup';

const meta = {
  title: 'Base Kendo Components/Buttons/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'], // Enables auto-generated Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A ButtonGroup component used to group related buttons together.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    dir: { 
      control: { type: 'select' },
      options: ['rtl', 'ltr', 'auto']
    },
    className: { control: 'text' },
    fillMode: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'flat']
    },
    buttonCount: {
      control: { type: 'range', min: 2, max: 5, step: 1 },
      description: 'Number of buttons in the group (2-5)'
    }
  },
};

export default meta;

// Shared render function
const ButtonGroupTemplate = (args) => <ButtonGroup {...args} />;

export const Outline = {
  args: {
    buttonCount: 3
  },
  render: (args) => <ButtonGroupTemplate {...args} />,
};

export const Solid = {
  args: {
    fillMode: 'solid',
    buttonCount: 3
  },
  render: (args) => <ButtonGroupTemplate {...args} />,
};