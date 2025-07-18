import React from 'react';

import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Base Components/Buttons/ButtonGroup',
  component: ButtonGroup,
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

export const Outline = {
  args: {
    fillMode: "outline",
    buttonCount: 3,
    disabled: false,
    dir: 'auto',
    width: 'auto',
    className: '',
  },
  name: 'Button Group Outline',
};

export const Solid = {
  args: {
    fillMode: "solid",
    buttonCount: 3,
    disabled: false,        
    dir: 'auto',
    width: 'auto',
    className: '',
  },
  name: 'Button Group Solid',
}