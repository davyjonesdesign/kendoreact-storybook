import React from 'react';
import { RadioGroup } from './RadioGroup';

const meta = {
  title: 'Base/Inputs/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
};
export default meta;

export const Primary = {
  args: {},
  name: 'Default',
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const HorizontalLayout = {
  args: {
    layout: 'horizontal',
  },
};
