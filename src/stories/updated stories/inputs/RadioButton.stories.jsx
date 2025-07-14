import React from 'react';
import { RadioButton } from './RadioButton';

const meta = {
  title: 'Base/Inputs/Radio Button',
  component: RadioButton,
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

export const WithLabel = {
  args: {
    label: "Yes, I'd like to subscribe",
  },
};
