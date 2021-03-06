import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getDetailChoreAPI } from '../apis/chore';
import { getLoginUser } from '../apis/user';
import TodayToDoMeDetail from '../components/templates/TodayToDoMeDetail/TodayToDoMeDetail';
import { chore3 } from '../dummyData/dummyChore';
import { Chore } from '../interfaces/chore';
import { User } from '../interfaces/user';

const chore = chore3;

type ParamTypes = {
  choreId: string;
};

const TodayToDoMeDetailPage = () => {
  const { choreId } = useParams() as ParamTypes;
  console.log(choreId);
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
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
  return <TodayToDoMeDetail chore={chore} />;
};

export default TodayToDoMeDetailPage;
