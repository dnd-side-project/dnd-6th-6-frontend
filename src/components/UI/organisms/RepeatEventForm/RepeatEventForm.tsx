import moment from 'moment';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { DefaultValue } from 'recoil';
import { setRepeatChoreAPI } from '../../../../apis/repeat-chore';
import { RepeatChore, Day } from '../../../../interfaces/chore';
import { User } from '../../../../interfaces/user';
import Button from '../../atoms/Button/Button';
import InputwithButton from '../../atoms/Input/InputwithButton';
import Label from '../../atoms/Label/Label';
import Message from '../../atoms/Message/Message';
import AssignmentRole from '../../molecules/AssignmentRole/AssignmentRole';
import Categories from '../../molecules/Categories/Categories';
import ChooseDay from '../../molecules/ChooseDay/ChooseDay';
import EventAssignes from '../../molecules/EventAssignes/EventAssignes';
import TextInput from '../../molecules/TextInput/TextInput';
import TimePicker from '../Timer/TimePicker';
import { StyledRepeatEventForm } from './RepeatEventFormStyled';
import { editChoreAPI } from '../../../../apis/repeat-chore';

interface IForm {
  title: string;
}

export interface IOrgRepeatEventFormProps {
  me: User;
  chore?: RepeatChore | any;
}

const RepeatEventForm = ({ me, chore }: IOrgRepeatEventFormProps) => {
  const navigate = useNavigate();
  const [checkCategory, setCheckCategory] = useState<{ id: number }>();
  const [checkMembers, setCheckMembers] = useState<User[]>([]);
  const [chooseDays, setChooseDays] = useState<Day[]>([]);
  const [chooseRole, setChooseRole] = useState<{ id: number; content: string }>({ id: 0, content: '' });
  const ref = useRef({ 시간대: '', 시: 0, 분: 0 });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ defaultValues: { title: chore?.information.name } });

  const onClickCategory = (category: { src: string; id: number; category: string }) => {
    setCheckCategory({ id: category.id });
  };

  const onClickDays = (day: Day, index: number) => {
    if (chooseDays.includes(day)) {
      setChooseDays((prevChooseDays) => prevChooseDays.filter((prevChooseDay) => prevChooseDay.id !== index + 1));
      return;
    }
    setChooseDays((prevChooseDays) => [...prevChooseDays, day]);
  };

  const onClickRole = (role: string, index: number) => {
    setChooseRole({ id: index, content: role });
  };

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
  const onValid = (data: IForm) => {
    console.log({ checkCategory, ...data, chooseDays, time: ref.current, chooseRole, checkMembers });
    const currentTime =
      ref.current.시간대 === '오전'
        ? `0${ref.current.시}:${ref.current.분}`
        : `${ref.current.시 + 12}:${ref.current.분}`;
    const time = moment(`${currentTime}`, 'HH:mm').toDate();
    const planned_at = moment(time).format('HH:mm:ss');
    console.log(planned_at);
    if (chore == undefined) {
      setRepeatChoreAPI({
        houseId: checkMembers[0].user_profile.house?.id as number,
        assignees: checkMembers,
        name: data.title,
        category: checkCategory as { id: number },
        days: chooseDays,
        allotcaion_method: chooseRole.id,
        planned_at,
      }).then(() => {
        navigate('/shareHousework');
      });
    } else {
      editChoreAPI({
        houseId: me.user_profile.house?.id as number,
        choreId: chore.id,
        assignees: checkMembers,
        name: data.title,
        categoryId: checkCategory?.id as number,
        days: chooseDays,
      })
        .then(() => {
          navigate('/shareHousework');
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      <EventAssignes me={me} onClick={onClickAvatar} checkMembers={checkMembers} mb="52px">
        <AssignmentRole mb="25px" chooseRole={chooseRole} onClickRole={onClickRole} />
      </EventAssignes>
      <Button
        disabled={
          !(
            checkCategory?.id !== undefined &&
            checkMembers.length > 0 &&
            chooseDays.length > 0 &&
            chooseRole.content !== ''
          )
        }
        className="basic"
      >
        완료
      </Button>
    </StyledRepeatEventForm>
  );
};

export default RepeatEventForm;
