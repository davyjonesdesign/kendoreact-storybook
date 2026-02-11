import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ChipList } from './ChipList';

const meta: Meta<typeof ChipList> = {
  title: 'Base Kendo Components/Buttons/ChipList',
  component: ChipList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A flexible chip list component built on top of Kendo UI ChipList. Supports different visual styles, selection modes, and removable chips.',
      },
    },
  },
  argTypes: {
    fillMode: {
      control: {
        type: 'select',
        options: ['solid', 'outline'],
        defaultValue: 'outline'

      },
      description: 'Controls the visual style of all chips'
    },
    selection: {
      control: {
        type: 'select',
        options: ['single', 'multiple', 'none'],
        defaultValue: 'none'
      },
      description: 'Selection behavior for chips'
    },
    removable: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether chips show remove (X) buttons'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all chips in the list'
    },
    data: {
      control: 'object',
      description: 'Array of chip data objects with text and value properties'
    }
  },
};

export default meta;

type Story = StoryObj<typeof ChipList>;

// Template for all stories
const Template = (args: React.ComponentProps<typeof ChipList>) => <ChipList {...args} />;

export const Solid: Story = {
  args: {
    fillMode: 'solid',
    removable: false,
    disabled: false,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Default solid style with multiple selection enabled.',
      },
    },
  }
};

export const Outline: Story = {
  args: {
    fillMode: 'outline',
    removable: false,
    disabled: false,
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Outline style showing chip borders without filled backgrounds.',
      },
    },
  }
};
