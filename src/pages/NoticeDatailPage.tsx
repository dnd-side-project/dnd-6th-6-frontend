import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getNoticeAPI } from '../apis/notice';
import { getLoginUser } from '../apis/user';
import NoticeDetail from '../components/templates/NoticeDetail/NoticeDetail';
import { notice1, notice2, notice3, notice4, notice5, notice6 } from '../dummyData/dummyNotice';
import { INotice } from '../interfaces/notice';
import { User } from '../interfaces/user';

const notices = [notice1, notice2, notice3, notice4, notice5, notice6];

const NoticeDetailPage = () => {
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  const { data: notices } = useQuery<INotice[]>('notice', () => getNoticeAPI(me?.user_profile.house?.id as number), {
    enabled: !!me,
  });
  // 알림 여부
  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !notices) {
    return <div>로딩중...</div>;
  }
  return <NoticeDetail notices={notices} />;
};

export default NoticeDetailPage;
