import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';

export interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  const [pageCount, setPageCount] = useState(0);

  const onMinusPageCount = () => {
    if (pageCount == 0) {
      return alert('go mainpage'); // redirect main page
    }
    setPageCount((prev) => prev - 1);
  };

  const onValid = (data: ILoginForm) => {
    if (!errors.email && pageCount == 0) {
      return setPageCount((prev) => prev + 1);
    }
    //axios요청
    console.log(data);
  };

  return (
    <>
      <Header onClick={onMinusPageCount} title="로그인" />
      <AppLayout>
        {pageCount == 0 ? <Title>이메일을 입력해주세요.</Title> : <Title>비밀번호를 입력해주세요.</Title>}
        <form onSubmit={handleSubmit(onValid)}>
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
              <Button>로그인</Button>
            </>
          )}
        </form>
      </AppLayout>
    </>
  );
};

export default Login;