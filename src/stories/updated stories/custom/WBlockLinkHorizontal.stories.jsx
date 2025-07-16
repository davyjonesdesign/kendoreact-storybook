import React from 'react';
import { Card as WBlockLink } from './WBlockLink';
import {
  CardHeader,
  CardTitle,
  CardSubtitle,
} from '@progress/kendo-react-layout';

export default {
  title: 'Base Components/Custom/w-block-link/Horizontal Block Link',
  component: WBlockLink,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      table: {
        disable: true, // 🔥 Removes it from the "Controls" and "ArgsTable" in docs tab
      },
    },
    type: {
      control: { type: 'select'},
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Status of the card that controls its visual style.',
      defaultValue: 'default',
    },
  },
  parameters: {
    controls: {
      exclude: ['orientation'], // 🔥 Hides it from the controls panel
    },
    docs: {
      description: {
        component: 'WBlockLink is a custom-styled card for navigation and status blocks using theme classes.',
      },
    },
  },
};

export const HorizontalBlockLink = {
  args: {
    orientation: 'horizontal',
    type: 'warning',
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    iconClass: 'k-i-star',
  },
  render: ({ orientation, type, title, subtitle, iconClass }) => (
    <WBlockLink orientation={orientation} type={type}>
      <div className="w-icon-wrapper">
        <span className={`k-icon k-font-icon ${iconClass} w-icon`} role="presentation" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardHeader>
      <div className="w-trailing-icon-wrapper">
        <span className="k-icon k-font-icon k-i-gear" role="presentation"></span>
      </div>
    </WBlockLink>
  ),
};
 
