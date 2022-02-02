import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';

export interface ITempJoinProps {}

interface IJoinForm {
  email: string;
  password: string;
}

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinForm>();
  const [pageCount, setPageCount] = useState(0);

  const onMinusPageCount = () => {
    if (pageCount === 0) {
      return;
    }
    setPageCount((prev) => prev - 1);
  };

  const onVaild = (data: IJoinForm) => {
    if (!errors.email && pageCount === 0) {
      return setPageCount((prev) => prev + 1);
    }
    console.log(data);
    //axios요청
  };
  return (
    <>
      <Header onClick={onMinusPageCount} title="회원가입" />
      <AppLayout>
        <Title>회원가입</Title>
        <form onSubmit={handleSubmit(onVaild)}>
          {pageCount === 0 && (
            <>
              <TextInput
                register={{
                  ...register('email', {
                    required: '이메일을 입력하세요',
                  }),
                }}
                labelText="이메일"
                type="email"
                message={errors.email?.message || ''}
              />

              <Button>다음</Button>
            </>
          )}
          {pageCount === 1 && (
            <>
              <TextInput
                register={{
                  ...register('password', {
                    required: '패스워드를 입력하세요',
                  }),
                }}
                labelText="패스워드"
                type="password"
                message={errors.password?.message || ''}
              />
              <Button>회원가입</Button>
            </>
          )}
        </form>
      </AppLayout>
    </>
  );
};

export default Join;
