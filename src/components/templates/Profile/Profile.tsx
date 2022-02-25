import { useState } from 'react';
import AppLayout from '../../Layouts/Applayout';
import { ProfileHeader, StyledProfile, ProfileWrapper } from './ProfileStyled';
import ProfileUserInfo from '../../UI/organisms/ProfileUserInfo/ProfileUserInfo';
import { ReactComponent as SettingIcon } from '../../../src_assets/settings.svg';
import RecentFeed from '../../UI/organisms/RecentFeed/RecentFeed';
import TodoReport from '../../UI/organisms/TodoReport/TodoReport';
import { User } from '../../../interfaces/user';
import { Member } from '../../../interfaces/house';
import { getLoginUser } from '../../../apis/user';
import { useQuery } from 'react-query';

interface IProfileProps {
  me: User;
  houseMemberInfo: Member[];
}

const Profile = ({ me, houseMemberInfo }: IProfileProps) => {
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <div>내 정보</div>
        <SettingIcon />
      </ProfileHeader>
      <StyledProfile>
        <div className="UserWrapper">
          <ProfileUserInfo
            name={me.first_name}
            email={me.username}
            image={me.user_profile.avatar}
            house={me.user_profile.house}
          />
          <RecentFeed />
        </div>
        <TodoReport />
      </StyledProfile>
    </ProfileWrapper>
  );
};
export default Profile;
