import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { getLoginUser } from '../../../apis/user';
import { user1 } from '../../../dummyData/dummyUser';
import { User } from '../../../interfaces/user';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import OneTimeEventForm from '../../UI/organisms/OneTimeEventForm/OneTimeEventForm';
import RepeatEventForm from '../../UI/organisms/RepeatEventForm/RepeatEventForm';
import { StyledEventMaking } from './EventMakingStyled';

export interface ITempEventMakingProps {}

const EventMaking = (props: ITempEventMakingProps) => {
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  useEffect(() => {
    setToken(localStorage.getItem('Token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me) {
    return <div>로딩중...</div>;
  }
  const navigate = useNavigate();
  const [plan, setPlan] = useState('oneTime');
  const goBack = () => {
    navigate(-1);
  };
  return (
    <AppLayout>
      <StyledEventMaking>
        <Header onClick={goBack} title="일정 만들기" mb="40px" />
        <div className="eventMaking_selectBtn">
          <Button
            onClick={() => setPlan('oneTime')}
            bgColor={plan === 'oneTime' ? '#5BADFF' : '#ECEEF4'}
            color={plan === 'oneTime' ? '#ffffff' : '#ABAFBB'}
            borderRedius="17px"
            width="106px"
            height="33px"
          >
            일회성 일정
          </Button>
          <Button
            onClick={() => setPlan('repeat')}
            bgColor={plan === 'repeat' ? '#5BADFF' : '#ECEEF4'}
            color={plan === 'repeat' ? '#ffffff' : '#ABAFBB'}
            borderRedius="17px"
            width="106px"
            height="33px"
          >
            반복 일정
          </Button>
        </div>
        {plan === 'oneTime' && <OneTimeEventForm me={me} />}
        {plan === 'repeat' && <RepeatEventForm me={me} />}
      </StyledEventMaking>
    </AppLayout>
  );
};

export default EventMaking;
