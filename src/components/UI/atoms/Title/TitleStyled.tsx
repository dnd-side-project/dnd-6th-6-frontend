import styled, { css } from 'styled-components';
import { IAtomTitleProps } from './Title';

export const StyledTitle = styled.h1<IAtomTitleProps>`
  ${({ fontSize, fontWeight, color, theme }) => {
    return css`
      font-size: ${fontSize || '20px'};
      font-weight: ${fontWeight || '800'};
      color: ${color || theme.textColor};
    `;
  }}
`;
