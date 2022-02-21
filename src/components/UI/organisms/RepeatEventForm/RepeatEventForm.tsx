import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import InputwithButton from '../../atoms/Input/InputwithButton';
import Label from '../../atoms/Label/Label';
import Message from '../../atoms/Message/Message';
import AssignmentRole from '../../molecules/AssignmentRole/AssignmentRole';
import Categories from '../../molecules/Categories/Categories';
import ChooseDay from '../../molecules/ChooseDay/ChooseDay';
import EventAssignes, { IMember } from '../../molecules/EventAssignes/EventAssignes';
import TextInput from '../../molecules/TextInput/TextInput';
import TimePicker from '../Timer/TimePicker';
import { StyledRepeatEventForm } from './RepeatEventFormStyled';

interface IForm {
  title: string;
}

export interface IOrgRepeatEventFormProps {}

const RepeatEventForm = (props: IOrgRepeatEventFormProps) => {
  const [checkCategory, setCheckCategory] = useState('');
  const [checkMembers, setCheckMembers] = useState<number[]>([]);
  const [chooseDays, setChooseDays] = useState<number[]>([]);
  const [chooseRole, setChooseRole] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const ref = useRef({ 시간대: '', 시: 0, 분: 0 });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onClickCategory = (category: { src: string; id: number; category: string }) => {
    setCheckCategory(category.category);
  };

  const onClickDays = (day: string, index: number) => {
    if (chooseDays.includes(index + 1)) {
      setChooseDays((prevChooseDays) => prevChooseDays.filter((prevChooseDay) => prevChooseDay !== index + 1));
      return;
    }
    setChooseDays((prevChooseDays) => [...prevChooseDays, index + 1]);
  };

  const onClickRole = (role: string) => {
    setChooseRole(role);
  };

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
  const onValid = (data: IForm) => {
    console.log({ checkCategory, ...data, chooseDays, time: ref.current, chooseRole, checkMembers });
  };
  return (
    <StyledRepeatEventForm onSubmit={handleSubmit(onValid)}>
      <div className="repeateEvent_category">
        <Label color="#3F4245" fontWeight="700" fontSize="17px" mb="16px">
          일정 만들기
        </Label>
        <Categories checkCategory={checkCategory} onClick={onClickCategory} />
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
        labelFontWeight="700"
        placeholder="이벤트 이름을 입력해주세요"
        message={errors.title?.message}
        mb="38px"
      />
      <div className="repeatEvent_days">
        <Label color="#3F4245" fontWeight="700" fontSize="17px" mb="18px">
          반복할 요일을 선택해주세요!
        </Label>
        <ChooseDay chooseDays={chooseDays} onClick={onClickDays} />
      </div>
      <div className="repeatEvent_time">
        <TimePicker ref={ref} />
      </div>
      <EventAssignes onClick={onClickAvatar} checkMembers={checkMembers} mb="52px">
        <AssignmentRole mb="25px" chooseRole={chooseRole} onClickRole={onClickRole} />
      </EventAssignes>
      <Button
        disabled={!(checkCategory !== '' && checkMembers.length > 0 && chooseDays.length > 0 && chooseRole !== '')}
        className="basic"
      >
        완료
      </Button>
    </StyledRepeatEventForm>
  );
};

export default RepeatEventForm;
