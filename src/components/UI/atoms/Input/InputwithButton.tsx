import { StyledButtonInput, StyledInput } from './InputStyled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ReactComponent as CloseIcon } from '../../../../src_assets/closeButton.svg';

export type InputType = 'email' | 'password' | 'text';

export interface IAtomInputProps {
  width?: string;
  type?: InputType;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  mb?: string;
  onClick: () => void;
}

const InputwithButton = (props: IAtomInputProps) => {
  const { onClick, ...restProps } = props;
  return (
    <StyledButtonInput>
      <StyledInput {...restProps} {...restProps.register} />
      <div className="delete" onClick={onClick}>
        <CloseIcon />
      </div>
    </StyledButtonInput>
  );
};

export default InputwithButton;
