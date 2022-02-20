import styled, { css } from 'styled-components';
import { IAtomLabelProps } from './Label';

export const StyledLabel = styled.span<IAtomLabelProps>`
  display: block;
  color: ${(props) => props.color || props.theme.textColor};
  font-size: ${(props) => props.fontSize || '0.9rem'};
  font-weight: ${(props) => props.fontWeight || '400'};
  margin-bottom: ${(props) => props.mb || '5px'};
`;
