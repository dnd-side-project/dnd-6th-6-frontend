import { StyledAvatar } from './AvatarStyled';

export interface IAtomAvatarProps {
  imgUrl?: string;
  name?: string;
  number?: number;
  position?: string;
  width?: string;
  height?: string;
  mb?: string;
}

const Avatar = (props: IAtomAvatarProps) => {
  return <StyledAvatar {...props}>{props.name ? props.name : ''}</StyledAvatar>;
};

export default Avatar;
