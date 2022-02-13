import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { StyledForm, StyledJoin, TextInputWrapper } from './JoinStyled';

export interface ITempJoinProps {}

interface IJoinForm {
  email: string;
}

const Join = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IJoinForm>();

  const onVaild = (data: IJoinForm) => {
    console.log(data);
    //해당 email이 사용가능한지 check API
    //setError('email', { message: '이미 존재하는 이메일입니다.' }, { shouldFocus: true });
    navigate('/join/emailAuth', { state: data.email });
  };
  return (
    <>
      <AppLayout>
        <StyledJoin>
          <Header mb="35px" title="회원가입" />
          <Title mb="24px" color="#3F4245" fontSize="23px" fontWeight="700" lineHeight="33.35px">
            로그인에 사용할
            <br />
            이메일을 입력해주세요
          </Title>
          <StyledForm onSubmit={handleSubmit(onVaild)}>
            <TextInputWrapper>
              <TextInput
                register={{
                  ...register('email', {
                    required: '이메일을 입력하세요',
                  }),
                }}
                placeholder="example@domain.com"
                labelText="이메일 주소"
                message={errors.email?.message || ''}
              />
            </TextInputWrapper>
            <Button className="basic">다음</Button>
          </StyledForm>
        </StyledJoin>
      </AppLayout>
    </>
  );
};

export default Join;
