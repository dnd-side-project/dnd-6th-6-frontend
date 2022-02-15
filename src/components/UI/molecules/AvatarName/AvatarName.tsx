import React from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import Label from '../../atoms/Label/Label';
import { StyledAvatarName } from './AvatarNameStyled';

export interface IMoleAvatarName {
  imgUrl?: string;
  first_name: string;
  avatarWidth?: string;
  avatarHeight?: string;
  onClick?: () => void;
}

const AvatarName = ({ imgUrl, first_name, onClick, avatarWidth, avatarHeight }: IMoleAvatarName) => {
  return (
    <StyledAvatarName onClick={onClick}>
      <Avatar mb="12px" width={avatarWidth || '88px'} height={avatarHeight || '88px'} />
      <Label fontSize="14px" color="#3f4245">
        {first_name}
      </Label>
    </StyledAvatarName>
  );
};

export default AvatarName;
