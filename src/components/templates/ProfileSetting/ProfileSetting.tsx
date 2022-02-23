import { useCallback, useState } from 'react';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Label from '../../UI/atoms/Label/Label';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { StyledForm, TextInputWrapper } from '../Join/JoinStyled';
import { StyledProfileSetting } from './ProfileSettingStyled';
import { useNavigate, useLocation } from 'react-router-dom';
import { setProfileAPI } from '../../../apis/user';
import { useMutation, useQueryClient } from 'react-query';

export interface ITempProfileSettingProps {}

interface IForm {
  first_name: string;
}

const ProfileSetting = (props: ITempProfileSettingProps) => {
  // const [gender, setGender] = useState('');
  // const [genderErrorMessage, setGenderErrorMessage] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation<any, Error, { signup_email: any; name: string }>(setProfileAPI, {
    onSuccess: (res) => {
      queryClient.setQueryData('userInfo', res.data.user);
      window.localStorage.setItem('Token', res.data.token);
      if (res.data.user.house != null) {
        navigate('/main');
      } else {
        navigate('/houseNone');
      }
    },
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  // const onClickBtn = useCallback(
  //   (e: React.MouseEvent<HTMLButtonElement>) => {
  //     setGender(e.currentTarget.innerText);
  //     setGenderErrorMessage('');
  //   },
  //   [gender, genderErrorMessage],
  // );

  const onValid = (data: IForm) => {
    // if (gender === '') {
    //   return setGenderErrorMessage('성별을 선택해 주세요.');
    // } else {
    //   setGenderErrorMessage('');
    // }
    // setProfileAPI(data,state)
    mutation.mutate({ signup_email: state, name: data['first_name'] });
  };
  return (
    <AppLayout>
      <StyledProfileSetting>
        <Header title="프로필 설정" mb="42px" />
        <Title color="#3F4245" fontSize="23px" mb="24px">
          본인의 정보를 입력해 주세요.
        </Title>
        <StyledForm onSubmit={handleSubmit(onValid)}>
          <TextInputWrapper>
            <TextInput
              register={{
                ...register('first_name', {
                  required: '이름을 적어주세요',
                }),
              }}
              mb="20px"
              labelText="이름"
              message={errors.first_name?.message}
            />
          </TextInputWrapper>
          {/* <div>
              <Label>성별</Label>
              <StyledBtnWrapper>
                <Button onClick={onClickBtn} type="button">
                  남성
                </Button>
                <Button onClick={onClickBtn} type="button" bgColor="pink">
                  여성
                </Button>
              </StyledBtnWrapper>
              <Message className="error">{genderErrorMessage}</Message>
            </div> */}

          <Button className="basic">다음</Button>
        </StyledForm>
      </StyledProfileSetting>
    </AppLayout>
  );
};

export default ProfileSetting;
