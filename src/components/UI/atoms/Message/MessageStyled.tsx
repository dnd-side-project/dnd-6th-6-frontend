import styled, { css } from 'styled-components';
import { IAtomMessageProps } from './Message';

export const StyledMessage = styled.span<IAtomMessageProps>`
  ${(props) => {
    return css`
      font-size: ${props.fontSize || '0.9rem'};
      &.success {
        color: ${props.theme.textColor};
      }
      &.error {
        color: red;
      }
    `;
  }}
`;
