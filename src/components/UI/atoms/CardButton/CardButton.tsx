import React from 'react';
import { StyledCardButton } from './CardButtonStyled';

export interface IAtomCardButtonProps {
  className: string;
}

const CardButton: React.FC<IAtomCardButtonProps> = (props) => {
  return <StyledCardButton className={props.className}>{props.children}</StyledCardButton>;
};

export default CardButton;
