import * as React from 'react';
import type { Meta } from '@storybook/react-webpack5';
import { ProgressBar } from './ProgressBar';
import { WLoadingBar } from './WLoadingBar';

const meta = {
  title: 'Base Kendo Components/Progress Bars/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;

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
  render: (args: React.ComponentProps<typeof WLoadingBar>) => <WLoadingBar {...args} />,
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
