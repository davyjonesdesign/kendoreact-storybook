import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Animations } from './Animations';

const meta = {
  title: 'Base Kendo Components/Animation/Animation Previews',
  component: Animations,
} satisfies Meta<typeof Animations>;

export default meta;
type Story = StoryObj<typeof Animations>;

export const Slide: Story = {
  args: {
    type: 'Slide',
  }
};

export const Fade: Story = {
  args: {
    type: 'Fade',
    exit: true,
  }
};

export const Expand: Story = {
  args: {
    type: 'Expand',
  }
};

export const Push: Story = {
  args: {
    type: 'Push',
  }
};

export const Reveal: Story = {
  args: {
    type: 'Reveal',
  }
};

export const Zoom: Story = {
  args: {
    type: 'Zoom',
  }
};
