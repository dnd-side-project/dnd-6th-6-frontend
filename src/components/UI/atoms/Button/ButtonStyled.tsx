import { builtinModules } from 'module';
import styled, { css } from 'styled-components';
import { IAtomButtonProps } from './Button';

export const StyledButton = styled.button<IAtomButtonProps>`
  border: none;
  border-radius: ${(props) => props.borderRedius || '8px'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '56px'};
  color: ${(props) => props.color || props.theme.textColor};
  background-color: ${(props) => props.bgColor || props.theme.bgColor};
  cursor: pointer;
`;
