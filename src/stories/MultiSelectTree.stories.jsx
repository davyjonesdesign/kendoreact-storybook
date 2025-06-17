import React from 'react';
import { MultiSelectTree } from './MultiSelectTree';

const meta = {
  title: 'Dropdowns/MultiSelect Tree',
  component: MultiSelectTree,
  tags: ['autodocs'], // Optional: enables Docs tab
  argTypes: {
    // Add any prop controls here if needed
  },
};

export default meta;

export const Primary = {
  storyName: 'MultiSelect Tree',
  args: {
    // Provide default props here if needed
  },
  render: (args) => <MultiSelectTree {...args} />,
};
