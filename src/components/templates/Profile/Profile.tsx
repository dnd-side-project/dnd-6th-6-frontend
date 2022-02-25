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
import { Feedback } from '../../../interfaces/feedback';
import BottomNavBar from '../../UI/molecules/BottomNavBar/BottomNavBar';
import { INotification } from '../../../interfaces/notification';

interface IProfileProps {
  me: User;
  houseMemberInfo: Member[];
  feedBackInfo: Feedback[];
  notification: INotification[];
}

const Profile = ({ me, houseMemberInfo, feedBackInfo, notification }: IProfileProps) => {
  return (
    <>
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
            <RecentFeed feedBackInfo={feedBackInfo} notification={notification} />
          </div>
          <TodoReport />
        </StyledProfile>
      </ProfileWrapper>
      <BottomNavBar />
    </>
  );
};
export default Profile;
