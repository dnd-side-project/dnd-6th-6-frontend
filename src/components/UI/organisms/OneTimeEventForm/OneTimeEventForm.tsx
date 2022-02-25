import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import EventAssignes from '../../molecules/EventAssignes/EventAssignes';
import TextInput from '../../molecules/TextInput/TextInput';
import { StyledOneTimeEventForm } from './OneTimeEventFormStyled';
import Calendar from '../Calendar/Calendar';
import Label from '../../atoms/Label/Label';
import Message from '../../atoms/Message/Message';
import TimePicker from '../Timer/TimePicker';
import { User } from '../../../../interfaces/user';
import { setChoreAPI } from '../../../../apis/chore';
import moment from 'moment';
import { useNavigate } from 'react-router';

interface IForm {
  title: string;
}

export interface IOrgOneTimeEventFormProps {
  me: User;
}

const OneTimeEventForm = ({ me }: IOrgOneTimeEventFormProps) => {
  const navigate = useNavigate();
  const [checkMembers, setCheckMembers] = useState<User[]>([]);
  const ref = useRef({ 시간대: '', 시: 0, 분: 0 });
  const [startDate, setStartDate] = useState<Date>();
  const [dateErrorMessage, setDateErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onClickAvatar = (member: User) => {
    console.log(member);
    if (checkMembers.includes(member)) {
      setCheckMembers((clickMembers) => {
        return clickMembers.filter((clickMember) => clickMember !== member);
      });
      return;
    }
    setCheckMembers((prev) => [...prev, member]);
  };

  const onVaild = (data: IForm) => {
    if (!startDate) {
      setDateErrorMessage('날짜를 선택해주세요.');
      console.log(dateErrorMessage);
      return;
    }
    if (checkMembers.length === 0) return;
    console.log({ ...data, checkMembers, plan_at: startDate });
    const currentday = moment(startDate).format('YYYY/MM/DD');
    const currentTime =
      ref.current.시간대 === '오전'
        ? `0${ref.current.시}:${ref.current.분}`
        : `${ref.current.시 + 12}:${ref.current.분}`;
    const planned_at = moment(`${currentday} ${currentTime}`, 'YYYY/MM/DD HH:mm').toDate();
    console.log(planned_at);
    setChoreAPI({
      houseId: me.user_profile.house?.id as number,
      assignees: checkMembers,
      name: data.title,
      planned_at,
    })
      .then(() => {
        navigate('/shareHousework');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledOneTimeEventForm onSubmit={handleSubmit(onVaild)}>
      <div className="oneTimeEvent_info">
        <TextInput
          register={{
            ...register('title', {
              required: '이벤트 이름을 입력해주세요',
            }),
          }}
          labelText="어떤 이벤트인가요?"
          labelColor="#3F4245"
          labelFontSize="17px"
          labelFontWeight="700"
          placeholder="이벤트 이름을 입력해주세요"
          message={errors.title?.message}
          mb="38px"
        />
        <div className="oneTimeEvent_calender">
          <Label color="#3F4245" fontSize="17px" mb="16px" fontWeight="700">
            언제 실행 예정인가요?
          </Label>
          <Calendar startDate={startDate} setStartDate={setStartDate} setDateErrorMessage={setDateErrorMessage} />
          {/* 타이머 */}
          <TimePicker ref={ref} />
          <Message className="error">{dateErrorMessage}</Message>
        </div>

        <EventAssignes me={me} onClick={onClickAvatar} checkMembers={checkMembers} />
      </div>
      <Button className="basic">완료</Button>
    </StyledOneTimeEventForm>
  );
};

export default OneTimeEventForm;
