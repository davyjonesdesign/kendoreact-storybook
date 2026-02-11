import * as React from 'react';
import { Window as KendoWindow, WindowActionsBar } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import '../assets/index.scss';

interface ActionButton {
  text: string;
  themeColor?: 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'primary' | 'base' | 'secondary' | 'tertiary' | 'inverse' | null;
  fillMode?: 'flat' | 'link' | 'solid' | 'outline' | null;
  onClick?: () => void;
  props?: Record<string, any>;
}

interface Actions {
  layout?: 'start' | 'center' | 'end' | 'stretched';
  buttons?: ActionButton[];
}

interface WindowProps {
  appendTo?: any;
  className?: string;
  closeButton?: React.ComponentType<any>;
  doubleClickStageChange?: boolean;
  draggable?: boolean;
  height?: number;
  initialHeight?: number;
  initialLeft?: number;
  initialTop?: number;
  initialWidth?: number;
  left?: number;
  maximizeButton?: React.ComponentType<any>;
  minWidth?: number;
  modal?: boolean;
  overlayStyle?: React.CSSProperties;
  resizeable?: boolean;
  restoreButton?: React.ComponentType<any>;
  shouldUpdateOnDrag?: boolean;
  stage?: string;
  style?: React.CSSProperties;
  themeColor?: 'dark' | 'light' | 'primary';
  title?: string;
  top?: number;
  width?: number;
  actions?: Actions;
  children?: React.ReactNode;
  onClose?: () => void;
  [key: string]: any; // for other KendoWindow props
}

export const Window: React.FC<WindowProps> = ({ actions, ...props }) => {
  const [visible, setVisible] = React.useState(true);
  const toggleDialog = () => setVisible(!visible);

  return (
    <div>
      <button onClick={toggleDialog}> Open Window </button>
      {visible && (
        <KendoWindow {...props} themeColor="dark" onClose={toggleDialog}>
          <p>Hello World</p>
          {actions && (
            <WindowActionsBar layout={actions.layout || 'stretched'} >
              {actions.buttons?.map((btn, i) => (
                <Button
                  style={{ margin: '10px 10px' }}
                  key={btn.text || i}
                  themeColor={btn.themeColor}
                  fillMode={btn.fillMode}
                  size="large"
                  onClick={btn.onClick || toggleDialog}
                  {...btn.props}
                >
                  {btn.text}
                </Button>
              ))}
            </WindowActionsBar>
          )}
        </KendoWindow>
      )}
    </div>
  );
};
