import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getDetailChoreAPI } from '../apis/chore';
import { getMembersAPI } from '../apis/house';
import { getLoginUser } from '../apis/user';
import Request from '../components/templates/Request/Request';
import { chore1 } from '../dummyData/dummyChore';
import { user1, user2, user3 } from '../dummyData/dummyUser';
import { Chore } from '../interfaces/chore';
import { User } from '../interfaces/user';

const chore = chore1;
const members = [user1, user2, user3];

type ParamTypes = {
  choreId: string;
};

const RequestPage = () => {
  const { choreId } = useParams() as ParamTypes;
  console.log(choreId);
  // const [token, setToken] = useState('');
  // // 로그인한 user 정보
  // const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
  //   enabled: !!token,
  // });
  // const { data: chore } = useQuery<Chore>(
  //   ['chore', choreId],
  //   () => getDetailChoreAPI(me?.user_profile.house?.id as number, +choreId as number),
  //   {
  //     enabled: !!me,
  //   },
  // );
  // const { data: members } = useQuery<User[]>('members', () => getMembersAPI(me?.user_profile.house?.id as number), {
  //   enabled: !!me,
  // });

  // useEffect(() => {
  //   setToken(localStorage.getItem('token') || '');
  //   //token없을경우 login page로 redirect
  // }, [token]);

  // if (!me || !chore || !members) {
  //   return <div>로딩중...</div>;
  // }
  return <Request chore={chore} members={members} />;
};

export default RequestPage;
