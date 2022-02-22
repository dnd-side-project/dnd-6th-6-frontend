import {} from 'react';
import AppLayout from '../../Layouts/Applayout';
import { ProfileHeader } from './ProfileStyled';
import ProfileUserInfo from '../../UI/organisms/ProfileUserInfo/ProfileUserInfo';
import { ReactComponent as SettingIcon } from '../../../src_assets/settings.svg';
const Profile = () => {
  return (
    <AppLayout>
      <ProfileHeader>
        <div>내 정보</div>
        <SettingIcon />
      </ProfileHeader>
      <ProfileUserInfo />
    </AppLayout>
  );
};
export default Profile;
