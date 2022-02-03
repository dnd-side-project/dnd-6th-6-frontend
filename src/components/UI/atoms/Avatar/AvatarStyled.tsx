import styled, { css } from 'styled-components';
import { IAtomAvatarProps } from './Avatar';

export const StyledAvatar = styled.div<IAtomAvatarProps>`
  ${(props) => {
    const avatarBackground = props.imgUrl ? `no-repeat center/80% url("${props.imgUrl}")` : props.theme.bgColor;
    return css`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${avatarBackground};
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;
