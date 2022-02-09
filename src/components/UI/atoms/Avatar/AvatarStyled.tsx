import styled, { css } from 'styled-components';
import { IAtomAvatarProps } from './Avatar';

export const StyledAvatar = styled.div<IAtomAvatarProps>`
  ${(props) => {
    const avatarBackground = props.imgUrl ? `no-repeat center/center url("${props.imgUrl}")` : props.theme.bgColor;
    return css`
      left: ${props.number * 18}px;
      position: absolute;
      width: 29px;
      height: 29px;
      border-radius: 50%;
      background: ${avatarBackground};
      font-size: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;
