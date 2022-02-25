import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getNotificationAPI } from '../apis/notification';
import { getLoginUser } from '../apis/user';
import Notification from '../components/templates/Notification/Notification';
import { notification, notification2 } from '../dummyData/dummyNotification';
import { INotification } from '../interfaces/notification';
import { User } from '../interfaces/user';

const notifications = [notification, notification2];

const NotificationPage = () => {
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  const { data: notifications } = useQuery<INotification[]>('notifications', getNotificationAPI, {
    enabled: !!token,
  });
  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !notifications) {
    return <div>로딩중...</div>;
  }
  return <Notification notifications={notifications} />;
};

export default NotificationPage;
