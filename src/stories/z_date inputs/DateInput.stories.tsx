import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { DateInput } from './DateInput';

const meta = {
  title: 'Date Inputs/Date Input',
  component: DateInput,
  argTypes: {},
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Primary: Story = {
  args: {},
  name: 'Default'
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const SpinButtons: Story = {
  args: {
    spinners: true
  }
};

export const TextHints: Story = {
  args: {
    value: undefined,
    placeholder: "Enter your birthday"
  }
};

export const FloatingLabel: Story = {
  args: {
    label: "Your birthday",
    placeholder: ""
  }
};
