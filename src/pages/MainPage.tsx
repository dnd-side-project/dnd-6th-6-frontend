import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getLoginUser, todayChoresMeAPI, todayChoresOthersAPI } from '../apis/user';
import Main from '../components/templates/Main/Main';
import { Chore, RepeatChore } from '../interfaces/chore';
import { User } from '../interfaces/user';

const MainPage = () => {
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  // 오늘 내 할일 목록
  const { data: todayChoresMe } = useQuery<Chore[]>(
    ['todayChores', 'me'],
    () => todayChoresMeAPI(me?.user_profile.house?.id as number),
    {
      enabled: !!me,
    },
  );
  //오늘 남의 할일 목록
  const { data: todayChoresOther } = useQuery<Chore[]>(
    ['todayChores', 'other'],
    () => todayChoresOthersAPI(me?.user_profile.house?.id as number),
    {
      enabled: !!me,
    },
  );
  // 고정된 공지사항 값
  // 알림 여부
  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
    console.log(token);
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !todayChoresMe || !todayChoresOther) {
    return <div>로딩중...</div>;
  }
  return <Main me={me} todayChoresMe={todayChoresMe} todayChoresOther={todayChoresOther} />;
};

export default MainPage;
