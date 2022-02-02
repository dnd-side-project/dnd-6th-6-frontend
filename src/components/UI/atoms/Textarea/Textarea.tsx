import React from 'react';
import { StyledTextarea } from './TextareaStyles';

export interface IAtomTextareaProps {
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

const Textarea: React.FC<IAtomTextareaProps> = (props) => {
  return (
    <>
      <StyledTextarea {...props} placeholder={props.placeholder}>
        {props.children}
      </StyledTextarea>
    </>
  );
};
export default Textarea;
