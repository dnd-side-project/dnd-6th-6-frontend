import Avatar from '../../atoms/Avatar/Avatar';
import { StyledProfileUserInfo } from './ProfileUserInfoStyled';

const ProfileUserInfo = () => {
  return (
    <StyledProfileUserInfo>
      <Avatar width="80px" height="80px" imgUrl="../../../../src_assets/profile.svg" />
      <div className="UserInfo">
        <div className="UserName">유저네임</div>
        <div className="UserEmail">유저이메일</div>
        <div className="HouseName">하우스이름 &gt;</div>
      </div>
    </StyledProfileUserInfo>
  );
};

export default ProfileUserInfo;
