import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAllChoresAPI } from '../apis/chore';
import { getAllRepeatChoresAPI } from '../apis/repeat-chore';
import { getLoginUser } from '../apis/user';
import ShareHouseWork from '../components/templates/ShareHouseWork/ShareHouseWork';
import ShareHouseWorkBlank from '../components/templates/ShareHouseWorkBlank/ShareHouseWorkBlank';
import { chore1, chore2, chore3 } from '../dummyData/dummyChore';
import { repeatChore1, repeatChore2 } from '../dummyData/dummyRepeatChore';
import { Chore, RepeatChore } from '../interfaces/chore';
import { User } from '../interfaces/user';

const repeatChores = [repeatChore1, repeatChore2];
const oneTimeChores = [chore1, chore2, chore3];

const ShareHouseWorkPage = () => {
  // const [token, setToken] = useState('');
  // // 로그인한 user 정보
  // const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
  //   enabled: !!token,
  // });
  // const { data: repeatChores } = useQuery<RepeatChore[]>('repeatChores', () => getAllChoresAPI(me?.user_profile.house?.id as number), {
  //   enabled: !!me,
  // });
  // const { data: oneTimeChores } = useQuery<Chore[]>('oneTimeChores', () => getAllRepeatChoresAPI(me?.user_profile.house?.id as number), {
  //   enabled: !!me,
  // });

  // useEffect(() => {
  //   setToken(localStorage.getItem('token') || '');
  //   //token없을경우 login page로 redirect
  // }, [token]);

  // if (!me || !repeatChores || !oneTimeChores) {
  //   return <div>로딩중...</div>;
  // }
  return (
    <>
      {repeatChores?.length === 0 && oneTimeChores?.length === 0 ? (
        <ShareHouseWorkBlank />
      ) : (
        <ShareHouseWork repeatChores={repeatChores} oneTimeChores={oneTimeChores} />
      )}
    </>
  );
};

export default ShareHouseWorkPage;
