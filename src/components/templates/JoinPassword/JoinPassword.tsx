import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { sendJoinPassword } from '../../../apis/user';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import { MessageType } from '../../UI/atoms/Message/Message';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { StyledForm, StyledJoinPassword, TextInputWrapper } from './JoinPasswordStyled';

interface IPasswordForm {
  password: string;
  passwordConfirm: string;
}

const JoinPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // 비밀번호 등록 api보낼때 보낼 email
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<IPasswordForm>({
    mode: 'onChange',
  });

  const onVaild = (data: IPasswordForm) => {
    console.log(data, state);
    // 비밀번호 등록 API
    sendJoinPassword({
      signup_email: state as string,
      password: data.password,
      ck_password: data.passwordConfirm,
    }).then((response) => navigate('/profileSetting', { state }));
  };

  const onBack = () => {
    navigate(-1);
  };

  return (
    <AppLayout>
      <StyledJoinPassword>
        <Header onClick={onBack} mb="35px" title="회원가입" />
        <Title mb="24px" color="#3F4245" fontSize="23px" fontWeight="700" lineHeight="33.35px">
          로그인에 사용할
          <br />
          비밀번호를 입력해주세요
        </Title>
        <StyledForm onSubmit={handleSubmit(onVaild)}>
          <TextInputWrapper>
            <TextInput
              register={{
                ...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                    message: '영문, 숫자, 특수문자를 포함해 8자 이상 20자 이하를 입력하세요.',
                  },
                }),
              }}
              labelText="비밀번호"
              type="password"
              message={
                errors.password?.message
                  ? errors.password?.message
                  : watch('password')
                  ? '사용할 수 있는 비밀번호 입니다.'
                  : '영문, 숫자, 특수문자를 포함한 8자 이상 20자 이하를 입력하세요.'
              }
              message_type={errors.password?.message ? 'error' : watch('password') ? 'success' : 'basic'}
              mb="24px"
            />
            <TextInput
              register={{
                ...register('passwordConfirm', {
                  required: '비밀번호를 입력해주세요.',
                  validate: (value) => (value !== watch('password') ? '비밀번호가 일치하지 않습니다.' : true),
                }),
              }}
              labelText="비밀번호 확인"
              type="password"
              message={
                errors.passwordConfirm?.message
                  ? errors.passwordConfirm?.message
                  : watch('password') === watch('passwordConfirm') && watch('passwordConfirm')
                  ? '비밀번호가 일치합니다.'
                  : ''
              }
              message_type={
                errors.passwordConfirm?.message
                  ? 'error'
                  : watch('password') === watch('passwordConfirm') && watch('passwordConfirm')
                  ? 'success'
                  : 'basic'
              }
            />
          </TextInputWrapper>
          <Button className="basic">시작하기</Button>
        </StyledForm>
      </StyledJoinPassword>
    </AppLayout>
  );
};

export default JoinPassword;
