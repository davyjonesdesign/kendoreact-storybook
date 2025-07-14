import React, { useEffect, useRef, useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { WLoadingBar } from './WLoadingBar';

export default {
  title: 'Base/Progress Bars/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Indeterminate = {
  args: {
    value: null,
  },
};

export const WLoadingBarStory = {
  name: 'w-loading-bar',
  render: (args) => <WLoadingBar {...args} />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Animated loading bar, fast start then slows after 60%, 5 seconds duration, no label, uses w-loading-bar class.'
      },
      source: {
        code: `<ProgressBar
                {...props}
                value={value}
                animation={true}
                labelVisible={false}
                className="w-loading-bar"
                ariaLabel="Loading bar"
              />`
      }
    }
  }
};
