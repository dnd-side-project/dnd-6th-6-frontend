import Avatar from '../../atoms/Avatar/Avatar';
import Label from '../../atoms/Label/Label';
import { StyledAvatarName } from './AvatarNameStyled';

export interface IMoleAvatarName {
  imgUrl?: string;
  first_name: string;
}

const AvatarName = ({ imgUrl, first_name }: IMoleAvatarName) => {
  return (
    <StyledAvatarName>
      <Avatar mb="12px" width="88px" height="88px" />
      <Label fontSize="14px" color="#3f4245">
        {first_name}
      </Label>
    </StyledAvatarName>
  );
};

export default AvatarName;
