import * as React from 'react';
import {
  Slide,
  Push,
  Expand,
  Fade,
  Zoom,
  Reveal,
} from "@progress/kendo-react-animation";
import '../assets/index.scss';

type AnimationType = 'Fade' | 'Expand' | 'Push' | 'Reveal' | 'Slide' | 'Zoom';

interface AnimationsProps {
  type?: AnimationType;
  animationEnteredStyle?: React.CSSProperties;
  animationEnteringStyle?: React.CSSProperties;
  animationExitedStyle?: React.CSSProperties;
  AnimationExitingStyle?: React.CSSProperties;
  appear?: boolean;
  childFactory?: any;
  className?: string;
  componentChildClassName?: string;
  componentChildStyle?: React.CSSProperties;
  enter?: boolean;
  exit?: boolean;
  id?: string;
  mountOnEnter?: boolean;
  stackChildren?: boolean;
  style?: React.CSSProperties;
  transitionEnterDuration?: number;
  transitionExitDuration?: number;
  transitionName?: string;
  unmountOnExit?: boolean;
  [key: string]: any; // for other animation props
}

export const Animations: React.FC<AnimationsProps> = ({type, ...props}) => {
  const [show, setShow] = React.useState(true);
  
  const onClick = () => {
    setShow(!show);
  };
  
  const children = show ? (
    <div 
      style={{
        height: '60px', 
        width: '60px', 
        backgroundColor:'green', 
        borderRadius: '100px'
      }}
    />
  ) : null;

  return (
    <>
      <button onClick={onClick}>
        Animate
      </button>
      <br/><br/>
      {type === 'Slide' && <Slide {...props}>{children}</Slide>}
      {type === 'Fade' && <Fade {...props}>{children}</Fade>}
      {type === 'Expand' && <Expand {...props}>{children}</Expand>}
      {type === 'Zoom' && <Zoom {...props}>{children}</Zoom>}
      {type === 'Push' && <Push {...props}>{children}</Push>}
      {type === 'Reveal' && <Reveal {...props}>{children}</Reveal>}
    </>
  );
};
