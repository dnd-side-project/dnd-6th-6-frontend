import styled, { css } from 'styled-components';
import { IAtomMessageProps } from './Message';

export const StyledMessage = styled.span<IAtomMessageProps>`
  ${(props) => {
    return css`
      font-size: ${props.fontSize || '12px'};
      &.success {
        color: #64adf5;
      }
      &.error {
        color: #e52828;
      }
      &.basic {
        color: #565a5e;
      }
    `;
  }}
`;
