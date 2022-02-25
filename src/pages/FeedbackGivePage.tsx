import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { getDetailChoreAPI } from '../apis/chore';
import { getDetailRepeatChoreAPI } from '../apis/repeat-chore';
import { getLoginUser } from '../apis/user';
import FeedbackGive from '../components/templates/FeedbackGive/FeedbackGive';
import { Chore } from '../interfaces/chore';
import { User } from '../interfaces/user';

type ParamTypes = {
  choreId: string;
};

const FeedbackGivePage = () => {
  const navigate = useNavigate();
  const { choreId } = useParams() as ParamTypes;
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
    onError: () => {
      navigate('/login');
    },
  });
  const { data: chore } = useQuery<Chore>(
    ['chore', choreId],
    () => getDetailChoreAPI(me?.user_profile.house?.id as number, +choreId as number),
    {
      enabled: !!me,
    },
  );
  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !chore) {
    return <div>로딩중...</div>;
  }
  return <FeedbackGive chore={chore} />;
};

export default FeedbackGivePage;
