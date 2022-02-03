import { useCallback, useState } from 'react';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Label from '../../UI/atoms/Label/Label';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { StyledForm } from '../Join/JoinStyled';
import { StyledBtnWrapper, StyledProfileSetting } from './ProfileSettingStyled';
import Message from '../../UI/atoms/Message/Message';

export interface ITempProfileSettingProps {}

interface IForm {
  first_name: string;
}

const ProfileSetting = (props: ITempProfileSettingProps) => {
  const [gender, setGender] = useState('');
  const [genderErrorMessage, setGenderErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onClickBtn = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setGender(e.currentTarget.innerText);
      setGenderErrorMessage('');
    },
    [gender, genderErrorMessage],
  );

  const onValid = (data: IForm) => {
    if (gender === '') {
      return setGenderErrorMessage('성별을 선택해 주세요.');
    } else {
      setGenderErrorMessage('');
    }
    console.log(data, gender);
  };
  return (
    <StyledProfileSetting>
      <Header title="프로필 설정" />
      <AppLayout>
        <Title mb="30px">본인의 정보를 입력해 주세요.</Title>
        <StyledForm onSubmit={handleSubmit(onValid)}>
          <div>
            <TextInput
              register={{
                ...register('first_name', {
                  required: '이름을 적어주세요.',
                }),
              }}
              mb="20px"
              labelText="이름"
              message={errors.first_name?.message}
            />
            <div>
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
            </div>
          </div>
          <Button>다음</Button>
        </StyledForm>
      </AppLayout>
    </StyledProfileSetting>
  );
};

export default ProfileSetting;
