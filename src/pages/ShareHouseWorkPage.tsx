import moment from 'moment';
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
import getMonthDateRange from '../utils/startEndDate';

const repeatChores = [repeatChore1, repeatChore2];
const oneTimeChores = [chore1, chore2, chore3];

const ShareHouseWorkPage = () => {
  const startEndDate = getMonthDateRange(moment().year(), moment().month() + 1);
  const [token, setToken] = useState('');
  const [startDate, setStartDate] = useState(moment(startEndDate.start).toISOString().slice(0, -1));
  const [endDate, setEndDate] = useState(moment(startEndDate.end).toISOString().slice(0, -1));
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  const { data: repeatChores } = useQuery<RepeatChore[]>(
    'repeatChores',
    () => getAllRepeatChoresAPI(me?.user_profile.house?.id as number),
    {
      enabled: !!me,
    },
  );
  const { data: oneTimeChores } = useQuery<Chore[]>(
    ['oneTimeChores', { startDate, endDate }],
    () => getAllChoresAPI(me?.user_profile.house?.id as number, startDate, endDate),
    {
      enabled: !!me,
    },
  );
  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !repeatChores || !oneTimeChores) {
    return <div>로딩중...</div>;
  }
  return (
    <>
      {repeatChores?.length === 0 && oneTimeChores?.length === 0 ? (
        <ShareHouseWorkBlank />
      ) : (
        <ShareHouseWork
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          repeatChores={repeatChores}
          oneTimeChores={oneTimeChores}
        />
      )}
    </>
  );
};

export default ShareHouseWorkPage;
