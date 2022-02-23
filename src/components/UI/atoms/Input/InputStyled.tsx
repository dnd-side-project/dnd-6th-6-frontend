import styled, { css } from 'styled-components';
import { IAtomInputProps } from './Input';

export const StyledInput = styled.input<IAtomInputProps>`
  ${(props) => {
    return css`
      font-size: 14px;
      width: ${props.width || '100%'};
      height: 52px;
      padding: 16px 20px;
      border-radius: 8px;
      margin-bottom: ${props.mb || 0};
      border: 1px solid #e4ebf5;
      background: #eff5fe;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #a7adbd;
      }
    `;
  }}
`;

export const StyledButtonInput = styled.div`
  width: 100%;
  .delete {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
  .block {
    position: relative;
  }
`;
