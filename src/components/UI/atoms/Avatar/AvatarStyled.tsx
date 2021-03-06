import styled, { css } from 'styled-components';
import { IAtomAvatarProps } from './Avatar';

export const StyledAvatar = styled.div<IAtomAvatarProps>`
  ${(props) => {
    const avatarBackground = props.imgUrl ? `no-repeat center/100% url("${props.imgUrl}")` : '#EFF5FE';
    // ? props.bgColor
    // : props.theme.bgColor;
    const number = props.number ? props.number * 18 : 0;
    const border = props.border ? '1px solid #E7F0FE' : 'none';
    return css`
      left: ${number}px;
      position: ${props.position || 'static'};
      width: ${props.width || '29px'};
      height: ${props.width || '29px'};
      border-radius: 50%;
      background: ${avatarBackground};
      font-size: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: ${props.mb || '0px'};
      border: ${border};
    `;
  }}
`;
