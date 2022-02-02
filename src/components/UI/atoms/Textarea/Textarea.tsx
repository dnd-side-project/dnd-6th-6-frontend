import React from 'react';
import { StyledTextarea } from './TextareaStyles';

export interface IAtomTextareaProps {
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

const Textarea = (props: IAtomTextareaProps) => {
  return (
    <>
      <StyledTextarea {...props} placeholder={props.placeholder}></StyledTextarea>
    </>
  );
};
export default Textarea;
