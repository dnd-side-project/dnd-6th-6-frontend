import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';

import { getLoginUser } from '../apis/user';
import NoticeWrite from '../components/templates/NoticeWrite/NoticeWrite';
import { User } from '../interfaces/user';

const NoticeWritePage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const { data: me } = useQuery<User>('me', getLoginUser, {
    onError: () => {
      navigate('/');
    },
  });
  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
  }, [token]);
  if (!me) {
    return <div>로딩중</div>;
  }
  return <NoticeWrite me={me} />;
};

export default NoticeWritePage;
