import styled, { css } from 'styled-components';
import { IAtomInputProps } from './Input';

export const StyledInput = styled.input<IAtomInputProps>`
  ${(props) => {
    return css`
      font-size: 15px;
      width: ${props.width || '100%'};
      height: 48px;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: ${props.mb || 0};
      border: 1px solid #e4ebf5;
      background: #eff5fe;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #9ca3ab;
      }
    `;
  }}
`;

export const StyledButtonInput = styled.div`
  position: relative;
  width: 100%;
  .delete {
    position: absolute;
    top: 15px;
    right: 10px;
  }
`;
