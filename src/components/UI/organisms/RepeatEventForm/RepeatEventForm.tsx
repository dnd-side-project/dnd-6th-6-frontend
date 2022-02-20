import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Label from '../../atoms/Label/Label';
import Categories from '../../molecules/Categories/Categories';
import TextInput from '../../molecules/TextInput/TextInput';
import { StyledRepeatEventForm } from './RepeatEventFormStyled';

interface IForm {
  title: string;
}

export interface IOrgRepeatEventFormProps {}

const RepeatEventForm = (props: IOrgRepeatEventFormProps) => {
  const [checkCategory, setCheckCategory] = useState('');
  const {
    register,
    formState: { errors },
  } = useForm<IForm>();

  const onClickCategory = (category: { src: string; id: number; category: string }) => {
    setCheckCategory(category.category);
  };
  return (
    <StyledRepeatEventForm>
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
    </StyledRepeatEventForm>
  );
};

export default RepeatEventForm;
