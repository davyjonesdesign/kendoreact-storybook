import React from 'react';

import { Barcode } from './Barcode';

export default {
  title: 'z_Barcodes/Barcode',
  component: Barcode,
  argTypes: {
  },
};

const Template = (args) => <Barcode {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Barcode';