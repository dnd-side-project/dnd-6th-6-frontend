import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { favoreDetailAPI } from '../apis/favor';
import { getLoginUser } from '../apis/user';
import RequestReceive from '../components/templates/RequestReceive/RequestReceive';
import { favor1 } from '../dummyData/dummyFavor';
import { Favor } from '../interfaces/favor';
import { User } from '../interfaces/user';

const favor = favor1;

type ParamTypes = {
  choreId: string;
  favorId: string;
};

const RequestReceivePage = () => {
  const { choreId, favorId } = useParams() as ParamTypes;
  console.log(favorId, choreId);
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  const { data: favor } = useQuery<Favor>(['favor', favorId], () =>
    favoreDetailAPI(+choreId as number, +favorId as number),
  );

  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !favor) {
    return <div>로딩중...</div>;
  }
  return <RequestReceive choreId={choreId} favor={favor} />;
};

export default RequestReceivePage;
