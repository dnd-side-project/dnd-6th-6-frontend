import styled, { css } from 'styled-components';
import { IAtomTextareaProps } from './Textarea';

export const StyledTextarea = styled.textarea<IAtomTextareaProps>`
  font-family: inherit;
  border: none;
  resize: none;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  border-radius: 12px;
  color: ${(props) => props.color || props.theme.textColor};
  background-color: ${(props) => props.bgColor || 'white'};
  font-size: 14px;
  padding: 20px;
  &::placeholder {
    color: #9ca3ab;
  }
  &:focus {
    outline: none;
  }
`;
