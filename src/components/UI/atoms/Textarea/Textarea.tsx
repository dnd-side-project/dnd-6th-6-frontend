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
      <StyledTextarea {...props} />
    </>
  );
};
export default Textarea;
