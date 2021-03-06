import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { getChoreCommentAPI, getDetailChoreAPI } from '../apis/chore';
import { getLoginUser } from '../apis/user';
import EventDetail from '../components/templates/EventDetail/EventDetail';
import { chore1 } from '../dummyData/dummyChore';
import { onetimeComment1, onetimeComment2, onetimeComment3, onetimeComment4 } from '../dummyData/dummyComment';
import { user1 } from '../dummyData/dummyUser';
import { Chore } from '../interfaces/chore';
import { ChoreComment } from '../interfaces/comment';
import { User } from '../interfaces/user';

type ParamTypes = {
  choreId: string;
};

const OneTimeEventDetail = () => {
  const navigate = useNavigate();
  const { choreId } = useParams() as ParamTypes;
  console.log(choreId);
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
  return <EventDetail chore={chore} me={me} comments={chore.comments} isOneTime={true} />;
};

export default OneTimeEventDetail;
