import { StyledAvatar } from './AvatarStyled';

export interface IAtomAvatarProps {
  imgUrl?: string;
  name?: string;
}

const Avatar = (props: IAtomAvatarProps) => {
  return <StyledAvatar {...props}>{props.name ? props.name : ''}</StyledAvatar>;
};

export default Avatar;
