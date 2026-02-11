import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { DateRangePicker } from './DateRangePicker';

const meta = {
  title: 'Date Inputs/DateRange Picker',
  component: DateRangePicker,
  argTypes: {},
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Primary: Story = {
  args: {},
  name: 'Default'
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const ReverseSelection: Story = {
  args: {
    allowReverse: true
  }
};

export const SwapDatesToggle: Story = {
  args: {
    allowReverse: true,
    swapButton: true
  }
};
