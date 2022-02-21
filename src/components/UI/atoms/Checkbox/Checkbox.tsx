import React from 'react';
import { StyledCheckbox } from './CheckboxStyled';

export interface IAtomCheckboxProps {
  labelFor: string;
  mb?: string;
  onClick?: () => void;
}

const Checkbox: React.FC<IAtomCheckboxProps> = ({ onClick, labelFor, children, mb }) => {
  return (
    <StyledCheckbox mb={mb || '0'} onClick={onClick}>
      <input id={labelFor} type="radio" name="selector" />
      <label htmlFor={labelFor} className="radio_label">
        {children}
      </label>
      <div className="check"></div>
    </StyledCheckbox>
  );
};

export default Checkbox;
