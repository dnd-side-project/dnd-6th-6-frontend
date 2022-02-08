import React from 'react';
import { StyledCardButton } from './CardButtonStyled';

type CardButton = 'meComplete' | 'meIncomplete' | 'houseComplete' | 'houseInomplete';

export interface IAtomCardButtonProps {
  className: CardButton;
}

const CardButton: React.FC<IAtomCardButtonProps> = (props) => {
  return <StyledCardButton className={props.className}>{props.children}</StyledCardButton>;
};

export default CardButton;
