import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getDetailRepeatChoreAPI, getRepeatChoreCommentAPI } from '../apis/repeat-chore';
import { getLoginUser } from '../apis/user';
import EventDetail from '../components/templates/EventDetail/EventDetail';
import { repeatComment1, repeatComment2, repeatComment3, repeatComment4 } from '../dummyData/dummyComment';
import { repeatChore1 } from '../dummyData/dummyRepeatChore';
import { user1 } from '../dummyData/dummyUser';
import { Chore } from '../interfaces/chore';
import { RepeatChoreComment } from '../interfaces/comment';
import { User } from '../interfaces/user';

const chore = repeatChore1;
const comments = [repeatComment1, repeatComment2, repeatComment3, repeatComment4];
const me = user1;

type ParamTypes = {
  choreId: string;
};

const RepeatEventDetailPage = () => {
  const { choreId } = useParams() as ParamTypes;
  console.log(choreId);
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  const { data: chore } = useQuery<Chore>(
    ['repeatChore', choreId],
    () => getDetailRepeatChoreAPI(me?.user_profile.house?.id as number, +choreId as number),
    {
      enabled: !!me,
    },
  );
  const { data: comments } = useQuery<RepeatChoreComment[]>(
    ['chore', choreId],
    () => getRepeatChoreCommentAPI(+choreId as number),
    {
      enabled: !!me,
    },
  );

  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !chore || !comments) {
    return <div>로딩중...</div>;
  }
  return <EventDetail isOneTime={false} chore={chore} comments={comments} me={me} />;
};

export default RepeatEventDetailPage;
