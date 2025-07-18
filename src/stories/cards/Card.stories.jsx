import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import Icons from '../common utilities/Icons';
import { Card } from './Card';
import {
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardActions
} from '@progress/kendo-react-layout';

import customIcons from '../assets/IconsList';

export default {
  title: 'Base Kendo Components/Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    showIcon: {
      control: 'boolean',
      description: 'Show or hide the icon'
    },
    iconName: {
      control: 'select',
      options: customIcons,
      description: 'Icon to display in the card'
    },
    iconSize: {
      control: 'select',
      options: ['default', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge'],
      description: 'Size of the icon'
    },
    iconThemeColor: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'dark', 'light', 'inverse'],
      description: 'Color theme of the icon'
    }
  }
};

const cardContent = (
  <>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle>Card Subtitle</CardSubtitle>
    </CardHeader>
    <CardBody>Check this out</CardBody>
    <CardActions layout="stretched">
      <Button themeColor="primary" rounded="full" fillMode="solid" size="large">Solid</Button>
      <Button themeColor="primary" rounded="full" fillMode="outline" size="large">Outline</Button>
    </CardActions>
  </>
);

export const Default = {
  args: {
    orientation: 'vertical',
    showIcon: true,
    iconName: 'profile',  // Changed from 'search' to one of your custom icons
    iconSize: 'xxxlarge',
    iconThemeColor: 'primary'
  },
  render: ({ showIcon, iconName, iconSize, iconThemeColor, ...args }) => (
    <Card 
      {...args} 
      icon={
        showIcon ? (
          <Icons 
            iconName={iconName}
            size={iconSize}
            themeColor={iconThemeColor}
          />
        ) : undefined
      }
    >
      {cardContent}
    </Card>
  )
};

export const Ghost = {
  args: {
    ...Default.args,
    className: 'w-ghost-card-vertical'
  },
  render: ({ showIcon, iconName, iconSize, iconThemeColor, ...args }) => (
    <Card 
      {...args}
      icon={
        showIcon ? (
          <Icons 
            iconName={iconName}
            size={iconSize}
            themeColor={iconThemeColor}
          />
        ) : undefined
      }
    >
      {cardContent}
    </Card>
  )
};

export const Notable = {
  args: {
    ...Default.args,
    className: 'w-notable-card-vertical'
  },
  render: ({ showIcon, iconName, iconSize, iconThemeColor, ...args }) => (
    <Card 
      {...args}
      icon={
        showIcon ? (
          <Icons 
            iconName={iconName}
            size={iconSize}
            themeColor={iconThemeColor}
          />
        ) : undefined
      }
    >
      {cardContent}
    </Card>
  )
};