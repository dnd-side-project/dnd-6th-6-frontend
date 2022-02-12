import React from 'react';
import { StyledAvatar } from './AvatarStyled';

export interface IAtomAvatarProps {
  imgUrl?: string;
  number?: number;
  position?: string;
  width?: string;
  height?: string;
  mb?: string;
  bgColor?: string;
  border?: boolean;
}

const Avatar: React.FC<IAtomAvatarProps> = (props) => {
  return <StyledAvatar {...props}>{props.children}</StyledAvatar>;
};

export default Avatar;
