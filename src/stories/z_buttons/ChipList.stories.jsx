import React from 'react';
import { ChipList } from './ChipList';


const meta = {
  title: 'Buttons/ChipList',
  component: ChipList,
  tags: ['autodocs'], // Enables auto-generated Docs tab
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
        type: 'radio',
        options: ['solid', 'outline']
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

export const Solid = {
  args: {
    fillMode: 'solid'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default solid style with multiple selection enabled.',
      },
    },
  }
};

export const Outline = {
  args: {
    fillMode: 'outline'
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline style showing chip borders without filled backgrounds.',
      },
    },
  }
};