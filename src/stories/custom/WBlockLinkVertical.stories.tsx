import * as React from 'react';
import type { Meta } from '@storybook/react-webpack5';
import { Card as WBlockLink } from './WBlockLink';
import {
  CardHeader,
  CardTitle,
  CardSubtitle,
} from '@progress/kendo-react-layout';

const meta = {
  title: 'Base Kendo Components/Custom/w-block-link/Vertical Block Link',
  component: WBlockLink,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      table: {
        disable: true,
      },
    },
    type: {
      control: { type: 'select'},
      options: ['default', 'info', 'success', 'warning', 'error'] as const,
      description: 'Status of the card that controls its visual style.',
      defaultValue: 'default',
    },
  },
  parameters: {
    controls: {
      exclude: ['orientation'],
    },
    docs: {
      description: {
        component: 'WBlockLink is a custom-styled card for navigation and status blocks using theme classes.',
      },
    },
  },
} satisfies Meta<typeof WBlockLink>;

export default meta;

export const VerticalBlockLink = {
  args: {
    orientation: 'vertical',
    type: 'default',
  },
  render: (args: React.ComponentProps<typeof WBlockLink>) => (
    <WBlockLink {...args}>
      <div className="w-icon-wrapper">
        <span className="k-icon k-font-icon k-i-star w-icon" role="presentation" />
      </div>
      <CardHeader>
        <CardTitle>
            <span className="k-icon k-font-icon k-i-star w-block-link-status-icon"/>
            Card Title</CardTitle>
        <CardSubtitle>Card Subtitle</CardSubtitle>
      </CardHeader>
    </WBlockLink>
  ),
};
