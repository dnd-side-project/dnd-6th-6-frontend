import React from 'react';
import { StyledCardButton } from './CardButtonStyled';

type CardButton = 'meComplete' | 'meIncomplete' | 'houseComplete' | 'houseIncomplete' | 'noticeFix' | 'tag';

export interface IAtomCardButtonProps {
  className: CardButton;
  onClick?: () => void;
}

const CardButton: React.FC<IAtomCardButtonProps> = (props) => {
  return (
    <StyledCardButton className={props.className} onClick={props.onClick}>
      {props.children}
    </StyledCardButton>
  );
};

export default CardButton;
