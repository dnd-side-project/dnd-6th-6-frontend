import React from 'react';
import { StyledLabel } from './LabelStyles';

export interface IAtomLabelProps {
  color?: string;
  fontSize?: string;
}

const Label: React.FC<IAtomLabelProps> = (props) => {
  return (
    <>
      <StyledLabel {...props}>{props.children}</StyledLabel>
    </>
  );
};
export default Label;
