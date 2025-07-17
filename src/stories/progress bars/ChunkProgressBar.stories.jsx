import React from 'react';

import { ChunkProgressBar } from './ChunkProgressBar';
import { WSubtleChunkBar } from './WSubtleChunkBar';
import { WSubtleChunkBarSm } from './WSubtleChunkBarSm';

export default {
  title: 'Base Components/Progress Bars/Chunk Progress Bar',
  component: ChunkProgressBar,
  argTypes: {

  },
};

const Template = (args) => <ChunkProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  value: null
};

export const WSubtle = (args) => <WSubtleChunkBar {...args} />;
WSubtle.args = {
  value: 60,
  min: 0,
  max: 100,
  disabled: false,
  dir: 'ltr'
};
WSubtle.storyName = 'w-subtle-chunk-bar';

export const WSubtleSm = (args) => <WSubtleChunkBarSm {...args} />;
WSubtleSm.args = {
  value: 60,
  min: 0,
  max: 100,
  disabled: false,
  dir: 'ltr'
};
WSubtleSm.storyName = 'w-subtle-chunk-bar-sm';
