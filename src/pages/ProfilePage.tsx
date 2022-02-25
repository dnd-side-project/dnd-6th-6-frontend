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
import { INotification } from '../interfaces/notification';
import { getNotificationAPI } from '../apis/notification';

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
  const { data: notifications } = useQuery<INotification[]>('notifications', getNotificationAPI, {
    enabled: !!token,
  });

  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
  }, [token]);
  if (!me || !houseMemberInfo || !feedBackInfo || !notifications) {
    return <div>로딩중</div>;
  }
  return <Profile me={me} houseMemberInfo={houseMemberInfo} feedBackInfo={feedBackInfo} notification={notifications} />;
};
export default ProfilePage;
