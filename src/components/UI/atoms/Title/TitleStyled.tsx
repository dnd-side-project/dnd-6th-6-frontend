import styled, { css } from 'styled-components';
import { IAtomTitleProps } from './Title';

export const StyledTitle = styled.h1<IAtomTitleProps>`
  ${({ fontSize, fontWeight, color, mb, theme, lineHeight }) => {
    return css`
      font-size: ${fontSize || '20px'};
      font-weight: ${fontWeight || '700'};
      color: ${color || theme.textColor};
      margin-bottom: ${mb || 0};
      line-height: ${lineHeight};
    `;
  }}
`;
