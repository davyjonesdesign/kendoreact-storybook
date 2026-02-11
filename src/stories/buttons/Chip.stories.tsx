import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Base Kendo Components/Buttons/Chip',
  component: Chip,
  tags: ['autodocs'], // Enables auto-generated Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A Chip component used to represent input, attribute, or action.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    fillMode: {
      control: { type: 'radio' },
      options: ['solid', 'outline'],
    },
    themeColor: {
      control: { type: 'select' },
      options: ['base', 'info', 'success', 'warning', 'error'],
    },
    disabled: { control: 'boolean' },
    removable: { control: 'boolean' },
    removeIcon: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

// Shared render function
const ChipTemplate = (args: React.ComponentProps<typeof Chip>) => <Chip {...args} />;

export const Solid: Story = {
  args: {
    label: 'Solid Chip',
    fillMode: 'solid',
    disabled: false,
    removable: true,
    removeIcon: 'x',
  },
  render: (args) => <ChipTemplate {...args} />,
};

export const Outline: Story = {
  args: {
    label: 'Outline Chip',
    fillMode: 'outline',
    disabled: false,
    removable: true,
    removeIcon: 'x',
  },
  render: (args) => <ChipTemplate {...args} />,
};