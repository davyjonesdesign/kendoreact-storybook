import * as React from 'react';
import type { Meta } from '@storybook/react-webpack5';
import { ExpansionPanel } from './ExpansionPanel';

const meta = {
  title: 'Layout/ExpansionPanel',
  component: ExpansionPanel,
  argTypes: {},
} satisfies Meta<typeof ExpansionPanel>;

export default meta;

export const Primary = {
  args: {
    expanded: false
  }
};

export const Disabled = {
  args: {
    disabled: true,
    expanded: false

  }
};

export const Small = {
  args: {
    className: 'expansion-panel-sm',
    expanded: false

  }
};
