import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { User } from '../interfaces/user';
import { Member } from '../interfaces/house';
import { getLoginUser } from '../apis/user';
import { getMembersAPI } from '../apis/house';
import Profile from '../components/templates/Profile/Profile';
import { useNavigate } from 'react-router-dom';
import { Feedback } from '../interfaces/feedback';
import { getFeedbackAPI } from '../apis/feedback';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const { data: me } = useQuery<User>('me', getLoginUser, {
    onError: () => {
      navigate('/');
    },
  });
  const { data: houseMemberInfo } = useQuery<Member[]>('housemember', getMembersAPI, {
    enabled: !!me,
  });

  const { data: feedBackInfo } = useQuery<Feedback[]>('feedback', () => getFeedbackAPI(1), {
    enabled: !!me,
  });

  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
  }, [token]);
  if (!me || !houseMemberInfo || !feedBackInfo) {
    return <div>로딩중</div>;
  }
  return <Profile me={me} houseMemberInfo={houseMemberInfo} feedBackInfo={feedBackInfo} />;
};
export default ProfilePage;
