import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import EventAssignes, { IMember } from '../../molecules/EventAssignes/EventAssignes';
import TextInput from '../../molecules/TextInput/TextInput';
import { StyledOneTimeEventForm } from './OneTimeEventFormStyled';
import imgChoose from '../../../../src_assets/imgChoose.svg';
import ChooseCatagoryModal from '../../molecules/ChooseCatagoryModal.tsx/ChooseCatagoryModal';
import Calendar from '../Calendar/Calendar';
import Title from '../../atoms/Title/Title';
import Label from '../../atoms/Label/Label';
import Message from '../../atoms/Message/Message';
import TimePicker from '../Timer/TimePicker';
import { ReactComponent as TimerIcon } from '../../../../src_assets/TimerIcon.svg';

interface IForm {
  title: string;
}

export interface IOrgOneTimeEventFormProps {}

const OneTimeEventForm = (props: IOrgOneTimeEventFormProps) => {
  // const [showCategoryModal, setShowCategoryModal] = useState(false);
  // const [chooseCategory, setChooseCategory] = useState<{ src: string; id: number; category: string }>();
  const [checkMembers, setCheckMembers] = useState<number[]>([]);
  const [visible, setvisible] = useState(false);
  const ref = useRef({ 시간대: '', 시: 0, 분: 0 });
  const showTimer = () => {
    setvisible(!visible);
  };
  const [startDate, setStartDate] = useState<Date>();
  const [dateErrorMessage, setDateErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onClickAvatar = (member: IMember) => {
    console.log(member);
    if (checkMembers.includes(member.id)) {
      setCheckMembers((clickMembers) => {
        return clickMembers.filter((clickMember) => clickMember !== member.id);
      });
      return;
    }
    setCheckMembers((prev) => [...prev, member.id]);
  };

  // const onClickImgChoose = (category: { src: string; id: number; category: string }) => {
  //   console.log(category);
  //   setChooseCategory(category);
  // };

  // const onShowImgChoose = () => {
  //   setShowCategoryModal((prev) => !prev);
  // };

  const onVaild = (data: IForm) => {
    if (dateErrorMessage === '') {
      setDateErrorMessage('날짜를 선택해주세요.');
      console.log(dateErrorMessage);
      return;
    }
    if (checkMembers.length === 0) return;
    console.log({ ...data, checkMembers, plan_at: startDate });
  };

  return (
    <StyledOneTimeEventForm onSubmit={handleSubmit(onVaild)}>
      <div className="oneTimeEvent_info">
        {/* <div className="event_category" onClick={onShowImgChoose}>
          <img src={!chooseCategory ? imgChoose : chooseCategory.src} />
          <span>{!chooseCategory ? '이미지 선택' : chooseCategory.category}</span>
        </div> */}
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
          <button className="TimerInput" onClick={showTimer}>
            {ref.current.시간대 == '' ? (
              <div className="value">시간을 입력해주세요</div>
            ) : (
              <div className="selectValue">
                {ref.current.시간대} {ref.current.시}시 {ref.current.분}분
              </div>
            )}
            <div className="icon">
              <TimerIcon />
            </div>
          </button>
          {visible && <TimePicker visible={showTimer} ref={ref} />}
          {/* */}
          <Message className="error">{dateErrorMessage}</Message>
        </div>

        <EventAssignes onClick={onClickAvatar} checkMembers={checkMembers} mb="35px" />
      </div>
      <Button className="basic">완료</Button>
      {/* {showCategoryModal && (
        <ChooseCatagoryModal
          setShowCategoryModal={setShowCategoryModal}
          onClick={onClickImgChoose}
          checkCategory={chooseCategory?.category}
        />
      )} */}
    </StyledOneTimeEventForm>
  );
};

export default OneTimeEventForm;
