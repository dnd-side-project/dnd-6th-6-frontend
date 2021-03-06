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
        setError(`invited.${event.target.id}.email`, { message: '?????? ??? ??? ?????? ???????????????' }, { shouldFocus: true });
      })
      .catch((e) => {
        setError(`invited.${event.target.id}.email`, { message: '???????????? ?????? ???????????????' }, { shouldFocus: true });
      });
  };
  return (
    <AppLayout>
      <StyledHouseMaking>
        <Header title="????????? ?????????" onClick={onMinusPageCount} mb="10px" />
        <ProgressiveBar page={pageCount}>
          <div className="progressivebarInner"></div>
        </ProgressiveBar>
        <StyledForm onSubmit={handleSubmit(onValid)}>
          {pageCount == 1 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title mb="20px" lineHeight="1.3">
                ???????????? ?????????
                <br />
                ????????????????
              </Title>
              <TextInputWrapper>
                <TextInput
                  type="text"
                  labelText="????????? ????????? ??????????????????"
                  register={{
                    ...register('housename', {
                      required: '????????? ????????? ???????????????',
                    }),
                  }}
                  message={errors.housename?.message || ''}
                />
              </TextInputWrapper>
              <Button bgColor="#5d9eff" color="white">
                ??????
              </Button>
            </>
          )}
          {pageCount == 2 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title mb="20px" lineHeight="1.3">
                ????????? ???????????????
                <br />
                ??????????????????!
              </Title>
              <TextInputWrapper>
                <div className="label">
                  <Label color="#7A7F84">????????? ????????? ???????????? ???????????????</Label>
                  <button
                    className="option"
                    type="button"
                    onClick={() => {
                      append({ email: '' });
                    }}
                  >
                    ???
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
                          ...register(`invited.${index}.email` as const, { required: '?????? ???????????? ?????? ??? ?????????' }),
                        }}
                        message={errors?.['invited']?.[index]?.['email']?.message}
                        message_type={
                          errors?.['invited']?.[index]?.['email']?.message == '?????? ??? ??? ?????? ???????????????'
                            ? 'success'
                            : 'error'
                        }
                      />
                      <button type="button" onClick={ValidEmail} id={index.toString()} className="InvitedCheckButton">
                        ??????
                      </button>
                    </div>
                  );
                })}
              </TextInputWrapper>
              <Button bgColor="#5d9eff" color="white">
                ??????
              </Button>
              <div
                className="skip"
                onClick={() => {
                  setPageCount((prev) => prev + 1);
                }}
              >
                ????????????
              </div>
            </>
          )}
          {pageCount == 3 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title>
                ????????? ?????? ????????????.
                <br />
                ???????????? ???????????????????
              </Title>
              <div className="Result">
                <HouseComplete />
                <div className="Board">
                  <div className="BoardInner" id="left">
                    <div className="BoardHeader">????????? ??????</div>
                    <div className="BoardValue">{watch('housename')}</div>
                  </div>
                  <div className="BoardInner">
                    <div className="BoardHeader">?????????</div>
                    <div className="BoardValue">{watch('invited').length}</div>
                  </div>
                </div>
                <Button bgColor="#5d9eff" color="white">
                  ????????????
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
