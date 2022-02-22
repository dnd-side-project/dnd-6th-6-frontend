import { StyledButtonInput, StyledInput } from './InputStyled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ReactComponent as CloseIcon } from '../../../../src_assets/closeButton.svg';
import Message, { MessageType } from '../Message/Message';

export type InputType = 'email' | 'password' | 'text';

export interface IAtomInputProps {
  width?: string;
  type?: InputType;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  mb?: string;
  onClick: () => void;
  message?: string;
  message_type?: MessageType;
}

const InputwithButton = (props: IAtomInputProps) => {
  const { onClick, ...restProps } = props;
  return (
    <StyledButtonInput>
      <StyledInput {...restProps} {...restProps.register} />
      <div className="delete" onClick={onClick}>
        <CloseIcon />
      </div>
      <Message className={props.message_type ? props.message_type : 'error'}>{props.message}</Message>
    </StyledButtonInput>
  );
};

export default InputwithButton;
