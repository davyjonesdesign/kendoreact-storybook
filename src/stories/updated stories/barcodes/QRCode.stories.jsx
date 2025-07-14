import React from 'react';

import { QRCode } from './QRCode';

export default {
  title: 'Base/Barcodes/QR Code',
  component: QRCode,
  argTypes: {

  },
};

const Template = (args) => <QRCode {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'QR Code';
