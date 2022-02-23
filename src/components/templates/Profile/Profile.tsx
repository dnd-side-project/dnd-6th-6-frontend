import {} from 'react';
import AppLayout from '../../Layouts/Applayout';
import { ProfileHeader, StyledProfile, ProfileWrapper } from './ProfileStyled';
import ProfileUserInfo from '../../UI/organisms/ProfileUserInfo/ProfileUserInfo';
import { ReactComponent as SettingIcon } from '../../../src_assets/settings.svg';
import RecentFeed from '../../UI/organisms/RecentFeed/RecentFeed';
import TodoReport from '../../UI/organisms/TodoReport/TodoReport';
const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <div>내 정보</div>
        <SettingIcon />
      </ProfileHeader>
      <StyledProfile>
        <div className="UserWrapper">
          <ProfileUserInfo />
          <RecentFeed />
        </div>
        <TodoReport />
      </StyledProfile>
    </ProfileWrapper>
  );
};
export default Profile;
