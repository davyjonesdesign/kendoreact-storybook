import React from 'react';
import Icons from './Icons';
import customIcons from '../../assets/IconsList';

const meta = {
  title: 'Base Components/Common Utilities/Icons',
  component: Icons,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
    themeColor: {
      control: { type: 'select' },
      options: [
        'primary', 'secondary', 'error', 'info', 'success', 'warning',
        'dark', 'light', 'inverse',
      ],
    },
    iconName: {
      control: { type: 'select' },
      options: customIcons,
    },
  },
};

export default meta;

export const SingleIcon = {
  args: {
    iconName: 'profile',
    size: 'xxlarge',
    themeColor: 'primary',
  },
};
export const MultipleIcons = {
  args: {
    size: 'xlarge',
    themeColor: 'primary',
  },
  render: (args) => <Icons {...args} />,
};