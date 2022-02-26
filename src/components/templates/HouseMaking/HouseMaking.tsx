import React, { useEffect } from 'react';
import { StyledHouseMaking } from './HouseMakingStyled';
import { useState } from 'react';
import { useFieldArray, useForm, Control } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { ProgressiveBar } from './HouseMakingStyled';
import { StyledForm } from './HouseMakingStyled';
import { ReactComponent as HouseComplete } from '../../../src_assets/HouseComplete.svg';
import Label from '../../UI/atoms/Label/Label';
import { TextInputWrapper } from '../Join/JoinStyled';
import InputwithButton from '../../UI/atoms/Input/InputwithButton';
import { useNavigate } from 'react-router-dom';
import { sendLoginEmailAPI } from '../../../apis/user';
import { inviteHouseAPI, makeHouseAPI } from '../../../apis/house';
import { useQueryClient } from 'react-query';
import axios from 'axios';

export interface IHouseMakingForm {
  housename: string;
  invited: { email: string }[];
}

const HouseMaking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    watch,
  } = useForm<IHouseMakingForm>({
    defaultValues: {
      invited: [{ email: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'invited',
  });
  const [pageCount, setPageCount] = useState<number>(1);

  const onMinusPageCount = () => {
    if (pageCount == 1) {
      return navigate(-1);
    }
    setPageCount((prev) => prev - 1);
  };

  const onValid = (data: IHouseMakingForm) => {
    if (!errors.housename && pageCount == 1) {
      return setPageCount((prev) => prev + 1);
    }
    if (!errors.invited && pageCount == 2) {
      return setPageCount((prev) => prev + 1);
    }
    makeHouseAPI(data.housename)
      .then((res) => {
        if (data.invited[0].email != '') {
          inviteHouseAPI(data.invited).then((res) => navigate('/main'));
        } else {
          navigate('/main');
        }
      })
      .catch((e) => console.log(e));
  };

  const ValidEmail = async (event: any) => {
    const checkvalue = event.target.previousSibling.childNodes[0].childNodes[0].value;
    sendLoginEmailAPI(checkvalue)
      .then((response) => {
        setError(`invited.${event.target.id}.email`, { message: '초대 할 수 있는 유저입니다' }, { shouldFocus: true });
      })
      .catch((e) => {
        setError(`invited.${event.target.id}.email`, { message: '존재하지 않는 유저입니다' }, { shouldFocus: true });
      });
  };
  return (
    <AppLayout>
      <StyledHouseMaking>
        <Header title="하우스 만들기" onClick={onMinusPageCount} mb="10px" />
        <ProgressiveBar page={pageCount}>
          <div className="progressivebarInner"></div>
        </ProgressiveBar>
        <StyledForm onSubmit={handleSubmit(onValid)}>
          {pageCount == 1 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title mb="20px" lineHeight="1.3">
                하우스의 이름은
                <br />
                무엇인가요?
              </Title>
              <TextInputWrapper>
                <TextInput
                  type="text"
                  labelText="하우스 이름을 입력해주세요"
                  register={{
                    ...register('housename', {
                      required: '하우스 이름을 넣어주세요',
                    }),
                  }}
                  message={errors.housename?.message || ''}
                />
              </TextInputWrapper>
              <Button bgColor="#5d9eff" color="white">
                다음
              </Button>
            </>
          )}
          {pageCount == 2 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title mb="20px" lineHeight="1.3">
                함께할 구성원들을
                <br />
                초대해주세요!
              </Title>
              <TextInputWrapper>
                <div className="label">
                  <Label color="#7A7F84">초대할 룸메의 이메일을 알려주세요</Label>
                  <button
                    className="option"
                    type="button"
                    onClick={() => {
                      append({ email: '' });
                    }}
                  >
                    ➕
                  </button>
                </div>
                {fields.map((field, index) => {
                  return (
                    <div className="InviteInputWrapper">
                      <InputwithButton
                        key={field.id}
                        mb="5px"
                        onClick={() => {
                          remove(index);
                        }}
                        placeholder="example@domain.com"
                        type="email"
                        register={{
                          ...register(`invited.${index}.email` as const, { required: '초대 이메일을 입력 해 주세요' }),
                        }}
                        message={errors?.['invited']?.[index]?.['email']?.message}
                        message_type={
                          errors?.['invited']?.[index]?.['email']?.message == '초대 할 수 있는 유저입니다'
                            ? 'success'
                            : 'error'
                        }
                      />
                      <button type="button" onClick={ValidEmail} id={index.toString()} className="InvitedCheckButton">
                        확인
                      </button>
                    </div>
                  );
                })}
              </TextInputWrapper>
              <Button bgColor="#5d9eff" color="white">
                다음
              </Button>
              <div
                className="skip"
                onClick={() => {
                  setPageCount((prev) => prev + 1);
                }}
              >
                건너뛰기
              </div>
            </>
          )}
          {pageCount == 3 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title>
                준비가 모두 끝났어요.
                <br />
                하우스에 입장해볼까요?
              </Title>
              <div className="Result">
                <HouseComplete />
                <div className="Board">
                  <div className="BoardInner" id="left">
                    <div className="BoardHeader">하우스 이름</div>
                    <div className="BoardValue">{watch('housename')}</div>
                  </div>
                  <div className="BoardInner">
                    <div className="BoardHeader">구성원</div>
                    <div className="BoardValue">{watch('invited').length}</div>
                  </div>
                </div>
                <Button bgColor="#5d9eff" color="white">
                  입장하기
                </Button>
              </div>
            </>
          )}
        </StyledForm>
      </StyledHouseMaking>
    </AppLayout>
  );
};

export default HouseMaking;
