import React from 'react';
import { StyledLabel } from './LabelStyled';

export interface IAtomLabelProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  mb?: string;
}

const Label: React.FC<IAtomLabelProps> = (props) => {
  return (
    <>
      <StyledLabel {...props}>{props.children}</StyledLabel>
    </>
  );
};
export default Label;
