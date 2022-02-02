import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { StyledForm, StyledJoin, TextInputWrapper } from './JoinStyled';

export interface ITempJoinProps {}

interface IJoinForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
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
    if (data.password !== data.passwordConfirm) {
      setError('passwordConfirm', { message: '비밀번호가 같지 않습니다.' }, { shouldFocus: true });
    }
    console.log(data);
    //axios요청
  };
  return (
    <>
      <StyledJoin>
        <Header onClick={onMinusPageCount} title={pageCount === 0 ? '회원가입' : '비밀번호 등록'} />

        <AppLayout>
          {pageCount === 0 && (
            <>
              <Title fontWeight="600">이메일로 작성된</Title>
              <Title fontWeight="600" mb="30px">
                인증코드를 입력해주세요.
              </Title>
            </>
          )}
          {pageCount === 1 && (
            <>
              <Title fontWeight="600">로그인에 사용할</Title>
              <Title fontWeight="600" mb="30px">
                비밀번호를 입력해주세요.
              </Title>
            </>
          )}
          <StyledForm onSubmit={handleSubmit(onVaild)}>
            {pageCount === 0 && (
              <>
                <TextInputWrapper>
                  <TextInput
                    register={{
                      ...register('email', {
                        required: '이메일을 입력하세요',
                      }),
                    }}
                    labelText="이메일"
                    type="email"
                    message={errors.email?.message || ''}
                    mb="20px"
                  />
                </TextInputWrapper>
                <Button position="fixed" bottom="20%">
                  다음
                </Button>
              </>
            )}
            {pageCount === 1 && (
              <>
                <TextInputWrapper>
                  <TextInput
                    register={{
                      ...register('password', {
                        required: '비밀번호를 입력하세요',
                      }),
                    }}
                    labelText="비밀번호"
                    type="password"
                    message={errors.password?.message || ''}
                    mb="20px"
                  />
                  <TextInput
                    register={{
                      ...register('passwordConfirm', {
                        required: '비밀번호 확인란을 입력하세요',
                      }),
                    }}
                    labelText="비밀번호 확인"
                    type="password"
                    message={errors.passwordConfirm?.message || ''}
                  />
                </TextInputWrapper>
                <Button position="fixed" bottom="20%">
                  회원가입
                </Button>
              </>
            )}
          </StyledForm>
        </AppLayout>
      </StyledJoin>
    </>
  );
};

export default Join;
