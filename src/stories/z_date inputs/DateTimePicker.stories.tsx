import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { DateTimePicker } from './DateTimePicker';

const meta = {
  title: 'Date Inputs/DateTime Picker',
  component: DateTimePicker,
  argTypes: {},
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Primary: Story = {
  args: {},
  name: 'Default'
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
