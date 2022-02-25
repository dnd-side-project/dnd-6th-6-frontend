import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { User } from '../interfaces/user';
import { Member } from '../interfaces/house';
import { getLoginUser } from '../apis/user';
import { getMembersAPI } from '../apis/house';
import Profile from '../components/templates/Profile/Profile';

const ProfilePage = () => {
  const [token, setToken] = useState('');
  const { data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  const { data: houseMemberInfo } = useQuery<Member[]>('housemember', getMembersAPI, {
    enabled: !!me,
  });
  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
  }, [token]);
  if (!me || !houseMemberInfo) {
    return <div>로딩중</div>;
  }
  return <Profile me={me} houseMemberInfo={houseMemberInfo} />;
};
export default ProfilePage;
