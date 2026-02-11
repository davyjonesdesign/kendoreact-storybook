import * as React from 'react';
import type { Meta } from '@storybook/react-webpack5';
import { Window } from './Window';

const meta = {
  title: 'Base Kendo Components/Dialogs/Window',
  component: Window,
  tags: ['autodocs'],
} satisfies Meta<typeof Window>;

export default meta;

export const SidePanel = {
  render: (args: typeof meta.component['prototype']) => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: '100%',
        margin: 0,
        padding: 0,
        zIndex: 1300,
      }}
    >
      <Window
        {...args}
        id="side-panel"
        className="w-side-panel"
        style={{
          height: '100vh',
          width: '40%',
          marginLeft: '60%',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        top={0}
        left={0}
        draggable={false}
        resizable={false}
        title="Side Panel"
        overlayStyle={{ opacity: 0.35 }}
      />
    </div>
  ),
  args: {
    doubleClickStageChange: false,
    draggable: false,
    maximizeButton: false,
    minimizeButton: false,
    resizeable: false,
    shouldUpdateOnDrag: false,
    actions: {
      layout: 'stretched' as const,
      buttons: [
        {
          text: 'Save',
          themeColor: 'primary',
          fillMode: 'solid',
          onClick: () => alert('Save clicked'),
        },
        {
          text: 'Cancel',
          fillMode: 'outline',
          themeColor: 'primary',
          onClick: () => alert('Cancel clicked'),
        },
      ],
    },
  },

};
