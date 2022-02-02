import styled, { css } from 'styled-components';
import { IAtomLabelProps } from './Label';

export const StyledLabel = styled.span<IAtomLabelProps>`
  color: ${(props) => props.color || props.theme.textColor};
  font-size: ${(props) => props.fontSize || '0.9rem'};
`;
