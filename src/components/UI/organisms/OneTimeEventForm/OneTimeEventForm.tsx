import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import EventAssignes, { IMember } from '../../molecules/EventAssignes/EventAssignes';
import TextInput from '../../molecules/TextInput/TextInput';
import { StyledOneTimeEventForm } from './OneTimeEventFormStyled';

interface IForm {
  category?: string;
  title: string;
  assigness: number[];
  planned_at?: Date;
}

export interface IOrgOneTimeEventFormProps {}

const OneTimeEventForm = (props: IOrgOneTimeEventFormProps) => {
  const [checkMembers, setCheckMembers] = useState<number[]>([]);
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

  const onVaild = (data: IForm) => {
    console.log(data);
  };
  return (
    <StyledOneTimeEventForm>
      <div className="event_category"></div>
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
      <EventAssignes onClick={onClickAvatar} checkMembers={checkMembers} mb="35px" />
      <Button className="basic">완료</Button>
    </StyledOneTimeEventForm>
  );
};

export default OneTimeEventForm;
