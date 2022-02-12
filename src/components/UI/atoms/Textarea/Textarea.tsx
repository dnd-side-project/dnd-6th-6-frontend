import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextarea } from './TextareaStyled';

export interface IAtomTextareaProps {
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

const Textarea = (props: IAtomTextareaProps) => {
  return (
    <>
      <StyledTextarea {...props} {...props.register} placeholder={props.placeholder}></StyledTextarea>
    </>
  );
};
export default Textarea;
