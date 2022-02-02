import { UseFormRegisterReturn } from 'react-hook-form';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Message from '../../atoms/Message/Message';
import { StyledTextInput } from './TextInputStyles';
import { InputType } from '../../atoms/Input/Input';

export interface IMolTextInputProps {
  labelText: string;
  register?: UseFormRegisterReturn;
  message?: string;
  type?: InputType;
  mb?: string;
}

const TextInput = (props: IMolTextInputProps) => {
  return (
    <StyledTextInput {...props}>
      <Label>{props.labelText}</Label>
      <Input register={props.register} type={props.type} mb="10px"></Input>
      <Message className="error">{props.message}</Message>
    </StyledTextInput>
  );
};

export default TextInput;
