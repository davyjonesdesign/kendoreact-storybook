import React from 'react';
import PropTypes from 'prop-types';
import { Window as KendoWindow, WindowActionsBar } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import '../../assets/index.scss';

export const Window = ({ actions, ...props }) => {
  const [visible, setVisible] = React.useState(true);
  const toggleDialog = () => setVisible(!visible);

  return (
    <div>
      <button onClick={toggleDialog}> Open Window </button>
      {visible && (
        <KendoWindow {...props} themeColor="dark" onClose={toggleDialog} actions={['Close']} // <-- Only Close button
>
          <p>Hello World</p>
          {actions && (
            <WindowActionsBar layout={actions.layout || 'stretched'} >
              {actions.buttons?.map((btn, i) => (
                <Button
                  style={{ margin: '10px 10px' }}
                  key={btn.text || i}
                  themeColor={btn.themeColor}
                  fillMode={btn.fillMode}
                  size={'large'}
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

Window.propTypes = {
  appendTo: PropTypes.any,
  className: PropTypes.string,
  closeButton: PropTypes.any,
  doubleClickStageChange: PropTypes.bool,
  draggable: PropTypes.bool,
  height: PropTypes.number,
  initialHeight: PropTypes.number,
  initialLeft: PropTypes.number,
  initialTop: PropTypes.number,
  initialWidth: PropTypes.number,
  left: PropTypes.number,
  maximizeButton: PropTypes.number,
  minWidth: PropTypes.number,
  modal: PropTypes.bool,
  overlayStyle: PropTypes.any,
  resizeable: PropTypes.bool,
  restoreButton: PropTypes.node,
  shouldUpdateOnDrag: PropTypes.bool,
  stage: PropTypes.string,
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(['dark', 'light', 'primary']),
  title: PropTypes.string,
  top: PropTypes.number,
  width: PropTypes.number,
  actions: PropTypes.shape({
    layout: PropTypes.oneOf(['start', 'center', 'end', 'stretched']),
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        themeColor: PropTypes.string,
        onClick: PropTypes.func,
        props: PropTypes.object
      })
    )
  }),
};

Window.defaultProps = {
  modal: true
};
