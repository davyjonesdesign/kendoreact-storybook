import * as React from 'react';
import {
  ExpansionPanel as KendoExpansionPanel,
  ExpansionPanelContent,
} from "@progress/kendo-react-layout";

import '../assets/index.scss';

interface ExpansionPanelProps {
  ariaControls?: string;
  children?: React.ReactNode;
  className?: string;
  collapseIcon?: string;
  collapseSVGIcon?: { name: string; content: string; viewBox: string; };
  dir?: 'ltr' | 'rtl' | 'auto';
  disabled?: boolean;
  expanded?: boolean;
  expandIcon?: string;
  expandSVGIcon?: { name: string; content: string; viewBox: string; };
  id?: string;
  style?: React.CSSProperties;
  subtitle?: string;
  tabIndex?: number;
  title?: string;
  onAction?: (e: any) => void;
  [key: string]: any; // for other KendoExpansionPanel props
}

export const ExpansionPanel: React.FC<ExpansionPanelProps> = ({
  expanded: initialExpanded = true,
  title = 'Title',
  ...props 
}) => {
  const [expanded, setExpanded] = React.useState(initialExpanded);

  return (
    <>
      <KendoExpansionPanel 
        {...props}
        expanded={expanded}
        title={title}
        onAction={() => setExpanded(!expanded)}
      >
        {expanded && (
          <ExpansionPanelContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nibh ut ipsum aliquam ornare. Integer molestie tellus non libero vehicula, id porta velit laoreet. Nam scelerisque consequat eros quis congue. Vivamus at quam vel libero varius feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris commodo ullamcorper lacus eu aliquet. Nam at sagittis tellus. Aliquam lacinia sem a felis aliquam, sed interdum neque aliquet. Nunc facilisis magna sit amet tortor fermentum dignissim in in nulla. Etiam non quam sit amet libero mollis vestibulum. Morbi quis metus ut lorem interdum faucibus vel non nibh.
          </ExpansionPanelContent>
        )}
      </KendoExpansionPanel>
    </>
  );
};
