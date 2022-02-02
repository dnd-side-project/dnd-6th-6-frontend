import { StyledInput } from './InputStyled';
import { UseFormRegisterReturn } from 'react-hook-form';

export type InputType = 'email' | 'password' | 'text';

export interface IAtomInputProps {
  width?: string;
  type?: InputType;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  mb?: string;
}

const Input = (props: IAtomInputProps) => {
  return <StyledInput {...props} {...props.register}></StyledInput>;
};

export default Input;
