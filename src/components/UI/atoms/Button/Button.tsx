import React from 'react';
import { StyledButton } from './ButtonStyled';

export interface IAtomButtonProps {
  bgColor?: string;
  color?: string;
  className?: string;
  position?: string;
  bottom?: string;
}

const Button: React.FC<IAtomButtonProps> = (props) => {
  return (
    <>
      <StyledButton type="submit" {...props}>
        {props.children}
      </StyledButton>
    </>
  );
};
export default Button;
