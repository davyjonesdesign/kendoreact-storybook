import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ButtonGroup } from './ButtonGroup';

const meta = {
  title: 'Base Kendo Components/Buttons/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
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
      options: ['rtl', 'ltr', 'auto'] as const
    },
    className: { control: 'text' },
    fillMode: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'flat'] as const
    },
    buttonCount: {
      control: { type: 'range', min: 2, max: 5, step: 1 },
      description: 'Number of buttons in the group (2-5)'
    }
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Outline: Story = {
  args: {
    buttonCount: 3,
    fillMode: 'outline'
  }
};

export const Solid: Story = {
  args: {
    fillMode: 'solid',
    buttonCount: 3
  }
};
