import { StyledInput } from './InputStyled';

type InputType = 'email' | 'password' | 'text';

export interface IAtomInputProps {
  width?: string;
  type?: InputType;
  placeholder?: string;
}

const Input = (props: IAtomInputProps) => {
  return <StyledInput {...props}></StyledInput>;
};

export default Input;
