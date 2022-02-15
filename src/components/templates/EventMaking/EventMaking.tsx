import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { StyledEventMaking } from './EventMakingStyled';

export interface ITempEventMakingProps {}

const EventMaking = (props: ITempEventMakingProps) => {
  const [plan, setPlan] = useState('oneTime');

  return (
    <AppLayout>
      <StyledEventMaking>
        <Header title="일정 만들기" mb="40px" />
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
      </StyledEventMaking>
    </AppLayout>
  );
};

export default EventMaking;
