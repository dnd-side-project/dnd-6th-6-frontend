import { useState } from 'react';
import AppLayout from '../../Layouts/Applayout';
import { ProfileHeader, StyledProfile, ProfileWrapper } from './ProfileStyled';
import ProfileUserInfo from '../../UI/organisms/ProfileUserInfo/ProfileUserInfo';
import { ReactComponent as SettingIcon } from '../../../src_assets/settings.svg';
import RecentFeed from '../../UI/organisms/RecentFeed/RecentFeed';
import TodoReport from '../../UI/organisms/TodoReport/TodoReport';
import { User } from '../../../interfaces/user';
import { getLoginUser } from '../../../apis/user';
import { useQuery } from 'react-query';

const Profile = () => {
  const [token, setToken] = useState('');
  const { data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <div>내 정보</div>
        <SettingIcon />
      </ProfileHeader>
      <StyledProfile>
        <div className="UserWrapper">
          <ProfileUserInfo
            name={me?.first_name}
            email={me?.username}
            image={me?.user_profile.avatar}
            house={me?.user_profile.house}
          />
          <RecentFeed />
        </div>
        <TodoReport />
      </StyledProfile>
    </ProfileWrapper>
  );
};
export default Profile;
