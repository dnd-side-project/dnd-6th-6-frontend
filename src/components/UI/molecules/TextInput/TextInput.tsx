import { UseFormRegisterReturn } from 'react-hook-form';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Message, { MessageType } from '../../atoms/Message/Message';
import { StyledTextInput } from './TextInputStyled';
import { InputType } from '../../atoms/Input/Input';
import React from 'react';

export interface IMolTextInputProps {
  labelText: string;
  register?: UseFormRegisterReturn;
  message?: string;
  type?: InputType;
  placeholder?: string;
  mb?: string;
  message_type?: MessageType;
}

const TextInput: React.FC<IMolTextInputProps> = (props) => {
  return (
    <StyledTextInput {...props}>
      <Label mb="16px" color="#565A5E">
        {props.labelText}
      </Label>
      <div className="input_wrapper">
        <Input placeholder={props.placeholder} register={props.register} type={props.type} mb="10px" />
        {props.children}
      </div>
      <Message className={props.message_type ? props.message_type : 'error'}>{props.message}</Message>
    </StyledTextInput>
  );
};

export default TextInput;
