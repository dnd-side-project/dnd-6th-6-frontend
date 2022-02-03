import { builtinModules } from 'module';
import styled, { css } from 'styled-components';
import { IAtomButtonProps } from './Button';

export const StyledButton = styled.button<IAtomButtonProps>`
  border: none;
  border-radius: 15px;
  width: 100%;
  height: 3rem;
  color: ${(props) => props.color || props.theme.textColor};
  background-color: ${(props) => props.bgColor || props.theme.bgColor};
  cursor: pointer;
`;
