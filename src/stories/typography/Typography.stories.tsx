import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Typography } from '../typography/Typography';
import { classNames } from '@progress/kendo-react-common';

const meta: Meta<typeof Typography> = {
  title: 'Base Kendo Components/Common Utilities/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Typography component showcasing various available text styles and formats.',
      },
    },
  },
  argTypes: { 
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'right', 'center', 'justify'],
    },
    textTransform: {
      control: { type: 'select' },
      options: ['capitalize', 'lowercase', 'uppercase'],
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};



export const TextAlignment: Story = {
  args: {
    textAlign: 'center',
  },
};

export const WHeadings: Story = {
  args: {
    classNames: 'heading-1-strong',
  },
};


export const TextTransform: Story = {
  args: {
    textTransform: 'uppercase',
  },
};
