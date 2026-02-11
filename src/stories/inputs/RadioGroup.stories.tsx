import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioGroup } from './RadioGroup';

const meta = {
  title: 'Base Kendo Components/Inputs/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {},
  name: 'Default',
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const HorizontalLayout: Story = {
  args: {
    layout: 'horizontal',
  },
};
