import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { DatePicker } from './DatePicker';

const meta = {
  title: 'Date Inputs/Date Picker',
  component: DatePicker,
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {},
  name: 'Default'
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const WeekNumbers: Story = {
  args: {
    weekNumber: true,
    show: true
  }
};
