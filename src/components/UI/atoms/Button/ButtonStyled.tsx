import styled, { css } from 'styled-components';
import { IAtomButtonProps } from './Button';

export const StyledButton = styled.button<IAtomButtonProps>`
  border: none;
  border-radius: ${(props) => props.borderRedius || '8px'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '56px'};
  color: ${(props) => props.color || props.theme.textColor};
  background-color: ${(props) => props.bgColor || props.theme.bgColor};
  cursor: pointer;
  &.basic {
    background: #64adf5;
    border: 1px solid #69b4ff;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
  }
  &:disabled {
    background-color: #c6def5;
    color: #ffffff;
    border: 1px solid #cfe7ff;
  }
`;
