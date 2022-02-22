import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAllChoresAPI } from '../apis/chore';
import { getAllRepeatChoresAPI } from '../apis/repeat-chore';
import { getLoginUser } from '../apis/user';
import ShareHouseWork from '../components/templates/ShareHouseWork/ShareHouseWork';
import { User } from '../interfaces/user';

const ShareHouseWorkPage = () => {
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  const { data: allChores } = useQuery('allChores', () => getAllChoresAPI(me?.id as number), {
    enabled: !!me,
  });
  const { data: allRepeatChores } = useQuery('allRepeatChores', () => getAllRepeatChoresAPI(me?.id as number), {
    enabled: !!me,
  });

  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me) {
    return <div>로딩중...</div>;
  }
  return <>{allChores || (allRepeatChores ? <div>가사분담페이지</div> : <ShareHouseWork />)}</>;
};

export default ShareHouseWorkPage;
