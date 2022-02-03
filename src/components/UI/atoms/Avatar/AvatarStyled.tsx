import styled, { css } from 'styled-components';
import { IAtomAvatarProps } from './Avatar';

export const StyledAvatar = styled.div<IAtomAvatarProps>`
  ${(props) => {
    const avatarBackground = props.imgUrl ? `no-repeat center/center url("${props.imgUrl}")` : props.theme.bgColor;
    return css`
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: ${avatarBackground};
      font-size: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;
