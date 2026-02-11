import * as React from 'react';
import type { Meta } from '@storybook/react-webpack5';
import { Card as WBlockLink } from './WBlockLink';
import {
  CardHeader,
  CardTitle,
  CardSubtitle,
} from '@progress/kendo-react-layout';

const meta = {
  title: 'Base Kendo Components/Custom/w-block-link/Horizontal Block Link',
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
export const HorizontalBlockLink = {
  args: {
    orientation: 'horizontal',
    type: 'warning',
  },
  render: (args: React.ComponentProps<typeof WBlockLink>) => (
    <WBlockLink {...args}>
      <div className="w-icon-wrapper">
        <span className="k-icon k-font-icon k-i-star w-icon" role="presentation" />
      </div>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardSubtitle>Card Subtitle</CardSubtitle>
      </CardHeader>
      <div className="w-trailing-icon-wrapper">
        <span className="k-icon k-font-icon k-i-gear" role="presentation"></span>
      </div>
    </WBlockLink>
  ),
};
