import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { MultiViewCalendar } from './MultiViewCalendar';

const meta = {
  title: 'Date Inputs/MultiView Calendar',
  component: MultiViewCalendar,
  argTypes: {},
} satisfies Meta<typeof MultiViewCalendar>;

export default meta;
type Story = StoryObj<typeof MultiViewCalendar>;

export const Primary: Story = {
  args: {},
  name: 'Default'
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const MultipleViews: Story = {
  args: {
    views: 4
  }
};

export const WeekNumbers: Story = {
  args: {
    weekNumber: true
  }
};
