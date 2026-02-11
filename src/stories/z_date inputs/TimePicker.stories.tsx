import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TimePicker } from './TimePicker';

const meta = {
  title: 'Date Inputs/Time Picker',
  component: TimePicker,
  argTypes: {},
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Primary: Story = {
  args: {},
  name: 'Default'
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const TextHints: Story = {
  args: {
    value: undefined,
    placeholder: "Enter your time of birth"
  }
};

export const FloatingLabel: Story = {
  args: {
    label: "Your time of birth",
    placeholder: ""
  }
};
