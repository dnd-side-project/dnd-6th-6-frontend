import { builtinModules } from 'module';
import styled, { css } from 'styled-components';
import { IAtomButtonProps } from './Button';

export const StyledButton = styled.button<IAtomButtonProps>`
  border: none;
  radius: 25%;
  width: 80%;
  color: ${(props) => props.color || props.theme.textColor};
  background-color: ${(props) => props.bgColor || props.theme.bgColor};
  cursor: pointer;
`;
