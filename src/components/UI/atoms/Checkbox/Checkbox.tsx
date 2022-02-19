import React from 'react';
import { StyledCheckbox } from './CheckboxStyled';

export interface IAtomCheckboxProps {
  labelFor: string;
}

const Checkbox: React.FC<IAtomCheckboxProps> = ({ labelFor, children }) => {
  return (
    <StyledCheckbox>
      <input id={labelFor} type="radio" name="selector" />
      <label htmlFor={labelFor} className="radio_label">
        {children}
      </label>
      <div className="check"></div>
    </StyledCheckbox>
  );
};

export default Checkbox;
