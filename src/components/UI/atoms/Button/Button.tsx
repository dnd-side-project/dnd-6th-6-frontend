import React from 'react';
import { StyledButton } from './ButtonStyled';

type ButtonType = 'reset' | 'button' | 'submit';

export interface IAtomButtonProps {
  bgColor?: string;
  color?: string;
  className?: string;
  bottom?: string;
  type?: ButtonType;
  width?: string;
  height?: string;
  borderRedius?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IAtomButtonProps> = (props) => {
  return (
    <>
      <StyledButton {...props} type={props.type ? props.type : 'submit'}>
        {props.children}
      </StyledButton>
    </>
  );
};
export default Button;
