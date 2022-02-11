import styled, { css } from 'styled-components';
import { IAtomInputProps } from './Input';

export const StyledInput = styled.input<IAtomInputProps>`
  ${(props) => {
    return css`
      width: ${props.width || '100%'};
      padding: 5px;
      border: 1.5px solid rgba(122, 127, 132, 0.3);
      border-radius: 8px;
      margin-bottom: ${props.mb || 0};
      &:focus {
        outline: none;
      }
      ::placeholder {
        color: #878b8e;
      }
    `;
  }}
`;
