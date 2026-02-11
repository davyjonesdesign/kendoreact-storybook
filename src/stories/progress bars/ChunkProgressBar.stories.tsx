import React from 'react';
import type { Meta } from '@storybook/react-webpack5';
import { ChunkProgressBar } from './ChunkProgressBar';
import { WSubtleChunkBar } from './WSubtleChunkBar';
import { WSubtleChunkBarSm } from './WSubtleChunkBarSm';

const meta = {
  title: 'Base Kendo Components/Progress Bars/Chunk Progress Bar',
  component: ChunkProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ChunkProgressBar>;

export default meta;

export const Primary = {
  args: {},
  parameters: {
    storyName: 'Default'
  }
};

export const Disabled = {
  args: {
    disabled: true
  }
};

export const Indeterminate = {
  args: {
    value: null
  }
};

export const WSubtle = {
  render: (args: React.ComponentProps<typeof WSubtleChunkBar>) => <WSubtleChunkBar {...args} />,
  args: {
    value: 60,
    min: 0,
    max: 100,
    disabled: false,
    dir: 'ltr' as const
  },
  parameters: {
    storyName: 'w-subtle-chunk-bar'
  }
};

export const WSubtleSm = {
  render: (args: React.ComponentProps<typeof WSubtleChunkBarSm>) => <WSubtleChunkBarSm {...args} />,
  args: {
    value: 60,
    min: 0,
    max: 100,
    disabled: false,
    dir: 'ltr' as const
  },
  parameters: {
    storyName: 'w-subtle-chunk-bar-sm'
  }
};
