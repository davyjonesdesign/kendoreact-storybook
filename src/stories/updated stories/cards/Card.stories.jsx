import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Card } from './Card';
import {
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardActions
} from '@progress/kendo-react-layout';

export default {
  title: 'Base/Layout/Card',
  component: Card,
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

// Example using Kendo UI font icon
const cardIcon = <span className="k-icon k-i-star" style={{ fontSize: 48, color: '#ffc107' }} />;

export const Default = (args) => (
  <Card {...args} icon={cardIcon} orientation="vertical">
    {cardContent}
  </Card>
);

export const Ghost = (args) => (
  <Card {...args} icon={cardIcon} orientation="vertical" className="w-ghost-card-vertical">
    {cardContent}
  </Card>
);

export const Notable = (args) => (
  <Card {...args} icon={cardIcon} orientation="vertical" className="w-notable-card-vertical">
    {cardContent}
  </Card>
);
