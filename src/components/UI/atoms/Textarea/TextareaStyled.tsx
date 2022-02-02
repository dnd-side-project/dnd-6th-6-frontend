import styled, { css } from 'styled-components';
import { IAtomTextareaProps } from './Textarea';

export const StyledTextarea = styled.textarea<IAtomTextareaProps>`
  width: ${(props) => props.width || '80%'};
  height: ${(props) => props.height || '30%'};
  border: none;
  border-radius: 25%;
  color: ${(props) => props.color || props.theme.textColor};
  background-color: ${(props) => props.bgColor || 'white'};
`;
