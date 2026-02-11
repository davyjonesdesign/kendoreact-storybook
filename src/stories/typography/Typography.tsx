import React from 'react';
import { Typography as KendoTypography } from "@progress/kendo-react-common";
import '../assets/index.scss';

interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase';
}

export const Typography: React.FC<TypographyProps> = ({...props }) => {

  return (
    <>
      <KendoTypography.h1 {...props}>Headline 1</KendoTypography.h1>
      <KendoTypography.h2 {...props}>Headline 2</KendoTypography.h2>
      <KendoTypography.h3 {...props}>Headline 3</KendoTypography.h3>
      <KendoTypography.h4 {...props}>Headline 4</KendoTypography.h4>
      <KendoTypography.h5 {...props}>Headline 5</KendoTypography.h5>
      <KendoTypography.h6 {...props}>Headline 6</KendoTypography.h6>
      <KendoTypography.p {...props}>I am a paragraph</KendoTypography.p>
      <KendoTypography.code {...props}>code</KendoTypography.code>
      <KendoTypography.pre {...props}>
        <KendoTypography.code {...props}
          dangerouslySetInnerHTML={{
            __html: `const handleChange = ({ target }) => {
  const { name, value } = target;
  const newData = Object.assign({}, data, { [name]: value });
  setData(newData);
}`,
          }}
        />
      </KendoTypography.pre>
    </>
  );
};
