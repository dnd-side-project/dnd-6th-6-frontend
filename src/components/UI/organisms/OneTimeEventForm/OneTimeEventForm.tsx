import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import EventAssignes, { IMember } from '../../molecules/EventAssignes/EventAssignes';
import TextInput from '../../molecules/TextInput/TextInput';
import { StyledOneTimeEventForm } from './OneTimeEventFormStyled';
import imgChoose from '../../../../src_assets/imgChoose.svg';
import ChooseCatagoryModal from '../../molecules/ChooseCatagoryModal.tsx/ChooseCatagoryModal';
import Calendar from '../Calendar/Calendar';

interface IForm {
  title: string;
  planned_at: Date;
}

export interface IOrgOneTimeEventFormProps {}

const OneTimeEventForm = (props: IOrgOneTimeEventFormProps) => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [chooseCategory, setChooseCategory] = useState<{ src: string; id: number; category: string }>();
  const [checkMembers, setCheckMembers] = useState<number[]>([]);
  const ref = useRef<{ 시간대: string; 시: number; 분: number }>();
  useEffect(() => {
    console.log(ref);
  });
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

  const onClickImgChoose = (category: { src: string; id: number; category: string }) => {
    console.log(category);
    setChooseCategory(category);
  };

  const onShowImgChoose = () => {
    setShowCategoryModal((prev) => !prev);
  };

  const onVaild = (data: IForm) => {
    if (checkMembers.length === 0 || !chooseCategory) return;
    console.log({ ...data, checkMembers, category: chooseCategory.category });
  };
  return (
    <StyledOneTimeEventForm onSubmit={handleSubmit(onVaild)}>
      <div className="oneTimeEvent_info">
        <div className="event_category" onClick={onShowImgChoose}>
          <img src={!chooseCategory ? imgChoose : chooseCategory.src} />
          <span>{!chooseCategory ? '이미지 선택' : chooseCategory.category}</span>
        </div>
        <TextInput
          register={{
            ...register('title', {
              required: '이벤트 이름을 입력해주세요',
            }),
          }}
          labelText="어떤 이벤트인가요?"
          labelColor="#3F4245"
          labelFontSize="17px"
          placeholder="이벤트 이름을 입력해주세요"
          message={errors.title?.message}
          mb="46px"
        />
        <TextInput
          register={{
            ...register('planned_at', {
              required: '날짜를 선택해주세요',
            }),
          }}
          labelText="실행 날짜는 언제인가요?"
          labelColor="#3F4245"
          labelFontSize="17px"
          placeholder="날짜를 선택해주세요"
          type="datetime-local"
          message={errors.planned_at?.message}
          mb="46px"
        />
        <Calendar />
        <EventAssignes onClick={onClickAvatar} checkMembers={checkMembers} mb="35px" />
      </div>
      <Button className="basic">완료</Button>
      {showCategoryModal && (
        <ChooseCatagoryModal
          setShowCategoryModal={setShowCategoryModal}
          onClick={onClickImgChoose}
          checkCategory={chooseCategory?.category}
        />
      )}
    </StyledOneTimeEventForm>
  );
};

export default OneTimeEventForm;
