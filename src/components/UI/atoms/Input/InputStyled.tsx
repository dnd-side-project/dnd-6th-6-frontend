import styled, { css } from 'styled-components';
import { IAtomInputProps } from './Input';

export const StyledInput = styled.input<IAtomInputProps>`
  ${(props) => {
    return css`
      width: ${props.width || '100%'};
      padding: 5px;
      margin-bottom: ${props.mb || 0};
      &:focus {
        outline: none;
      }
    `;
  }}
`;
