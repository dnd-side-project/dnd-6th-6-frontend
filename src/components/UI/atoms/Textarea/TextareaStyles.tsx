import styled, { css } from 'styled-components';
import { IAtomTextareaProps } from './Textarea';

export const StyledTextarea = styled.textarea<IAtomTextareaProps>`
  placeholder: ${(props) => props.placeholder};
  width: ${(props) => props.width || '80%'};
  height: ${(props) => props.height || '30%'};
  border: none;
  radius: 25%;
  color: ${(props) => props.color || props.theme.textColor};
  background-color: ${(props) => props.bgColor || 'white'};
`;
