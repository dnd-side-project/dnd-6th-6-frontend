import React from 'react';
import { StyledButton } from './ButtonStyles';

export interface IAtomButtonProps{
    bgColor?: string;
    color?: string;
    className?: string;
}

const Button: React.FC<IAtomButtonProps> = props =>{
    return(
        <>
          <StyledButton type="submit" {...props}>
              {props.children}
          </StyledButton>
        </>
    )
}