import { StyledButtonInput, StyledInput } from './InputStyled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ReactComponent as CloseIcon } from '../../../../src_assets/closeButton.svg';
import React from 'react';

export type InputType = 'email' | 'password' | 'text';

export interface IAtomInputProps {
  width?: string;
  type?: InputType;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  mb?: string;
  value?: string;
  onClick: () => void;
}

const InputwithButton: React.FC<IAtomInputProps> = (props) => {
  const { onClick, ...restProps } = props;
  return (
    <StyledButtonInput>
      <StyledInput {...restProps} {...restProps.register} value={props.value} />
      <div className="delete" onClick={onClick}>
        <CloseIcon />
      </div>
    </StyledButtonInput>
  );
};

export default InputwithButton;
