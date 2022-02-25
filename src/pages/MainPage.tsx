import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getLoginUser, todayChoresMeAPI, todayChoresOthersAPI } from '../apis/user';
import { getNoticeAPI } from '../apis/notice';
import { getMembersAPI } from '../apis/house';
import Main from '../components/templates/Main/Main';
import { Chore, RepeatChore } from '../interfaces/chore';
import { Member } from '../interfaces/house';
import { INotice } from '../interfaces/notice';
import { User } from '../interfaces/user';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    onError: () => {
      navigate('/');
    },
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
  const { data: topnotice } = useQuery<INotice[]>('notice', () => getNoticeAPI(me?.user_profile.house?.id as number), {
    enabled: !!me,
  });
  // 알림 여부
  //하우스 멤버정보
  const { data: houseMemberInfo } = useQuery<Member[]>('housemember', getMembersAPI, {
    enabled: !!me,
  });
  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
    console.log(token);
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !todayChoresMe || !todayChoresOther || !topnotice || !houseMemberInfo) {
    return <div>로딩중...</div>;
  }
  return (
    <Main
      me={me}
      todayChoresMe={todayChoresMe}
      todayChoresOther={todayChoresOther}
      notice={topnotice}
      houseMemberInfo={houseMemberInfo}
    />
  );
};

export default MainPage;
