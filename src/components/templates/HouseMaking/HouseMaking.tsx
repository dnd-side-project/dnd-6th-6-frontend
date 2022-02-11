import React from 'react';
import { StyledHouseMaking } from './HouseMakingStyled';
import { useState } from 'react';
import { useFieldArray, useForm, Control } from 'react-hook-form';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import TextInput from '../../UI/molecules/TextInput/TextInput';
import { ProgressiveBar } from './HouseMakingStyled';
import { Step } from './HouseMakingStyled';
import { ReactComponent as HouseMakingImg } from '../../../src_assets/HouseMaking.svg';
import Label from '../../UI/atoms/Label/Label';
import Input from '../../UI/atoms/Input/Input';

export interface IHouseMakingForm {
  housename: string;
  invited: { email: string }[];
}

const HouseMaking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    control,
  } = useForm<IHouseMakingForm>();

  const { fields, append, remove } = useFieldArray({
    name: 'invited',
    control,
  });
  const [pageCount, setPageCount] = useState<number>(1);

  const onMinusPageCount = () => {
    if (pageCount == 1) {
      return;
    }
    setPageCount((prev) => prev - 1);
  };

  const onValid = (data: IHouseMakingForm) => {
    if (!errors.housename && pageCount == 1) {
      return setPageCount((prev) => prev + 1);
    }
    if (!errors.invited && pageCount == 2 && fields.length != 0) {
      console.log(data);
      return setPageCount((prev) => prev + 1);
    }
  };
  return (
    <AppLayout>
      <StyledHouseMaking>
        <Header title="하우스 만들기" onClick={onMinusPageCount} />
        <ProgressiveBar page={pageCount}>
          <div className="progressivebarInner"></div>
        </ProgressiveBar>
        <Step onSubmit={handleSubmit(onValid)}>
          {pageCount == 1 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title>
                어떤 하우스인지
                <br />
                소개해주세요!
              </Title>
              <HouseMakingImg height={260} width={347} />
              <TextInput
                type="text"
                labelText="하우스에 이름을 붙여주세요"
                register={{
                  ...register('housename', {
                    required: '하우스 이름을 넣어주세요',
                  }),
                }}
                message={errors.housename?.message || ''}
              />
              <Button bgColor="#5d9eff" color="white">
                다음
              </Button>
            </>
          )}
          {pageCount == 2 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title>
                함께할 구성원들을
                <br />
                초대해주세요!
              </Title>
              <HouseMakingImg width={347} height={260} />
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
                  <div key={field.id}>
                    <Input
                      placeholder="email"
                      type="email"
                      register={{
                        ...register(`invited.${index}.email` as const, {
                          required: '이메일을 입력해주세요',
                        }),
                      }}
                    />
                    <button className="option" type="button" onClick={() => remove(index)}>
                      ❌
                    </button>
                  </div>
                );
              })}
              <Button bgColor="#5d9eff" color="white">
                다음
              </Button>
            </>
          )}
          {pageCount == 3 && (
            <>
              <div className="StepHeader">Step {pageCount}</div>
              <Title>
                모두 완료했어요!
                <br />
                하우스에 입장해볼까요?
              </Title>
              <HouseMakingImg />
              <div className="Result">
                <div className="ResultInner">
                  <div>하우스 이름</div>
                  <div>{watch('housename')}</div>
                </div>
                <div className="ResultInner">
                  <div>구성원</div>
                  <div>{fields.length}</div>
                </div>
              </div>
              <Button bgColor="#5d9eff" color="white">
                입장하기
              </Button>
            </>
          )}
        </Step>
      </StyledHouseMaking>
    </AppLayout>
  );
};

export default HouseMaking;
