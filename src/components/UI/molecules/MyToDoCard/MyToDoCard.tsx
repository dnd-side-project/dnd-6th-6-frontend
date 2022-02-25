import Button from '../../atoms/Button/Button';
import CardButton from '../../atoms/CardButton/CardButton';
import Title from '../../atoms/Title/Title';
import { CardCategoryImg, CardCategoryImgWrapper, StyledMyToDoCard } from './MyToDoCardStyled';
import basket from '../../../../src_assets/basket.svg';
import pail from '../../../../src_assets/pail.svg';
import React, { useState } from 'react';
import Time from '../../atoms/Time/Time';
import { categoryImgURLs } from '../../../../utils/category';
import { Link } from 'react-router-dom';
import CompletionModal from '../CompletionModal/CompletionModal';
import { Chore } from '../../../../interfaces/chore';

export interface IMoleMyToDoCardProps {
  title: string;
  completed_at: Date | null; //completed_at: Date | null;
  days?: string;
  category: string;
  choreId: number;
  chore: Chore;
  onClickButton: (chore: Chore) => void;
}

const MyToDoCard = (props: IMoleMyToDoCardProps) => {
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  // const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.stopPropagation();
  // };
  return (
    <>
      <StyledMyToDoCard>
        <header className="myToDoCard_header">
          {props.completed_at ? (
            <CardButton className="meComplete">완료</CardButton>
          ) : (
            <CardButton className="meIncomplete">미완료</CardButton>
          )}
        </header>
        <div className="cardInfo">
          <Title fontWeight="700" fontSize="16px" color="#3F4245">
            {props.title}
          </Title>
          {props.category !== '일회성' && (
            <h6 className="subTitle">
              매주 <Time createdAt={new Date()} className="day" />
            </h6>
          )}
        </div>
        <CardCategoryImgWrapper>
          <Link to={`/event/${props.choreId}/today`}>
            {props.category === '빨래' && <CardCategoryImg src={basket} />}
            {props.category === '청소' && <CardCategoryImg src={pail} />}
            {categoryImgURLs.map((categoryImgURL) => {
              if (categoryImgURL.category === props.category) {
                return <CardCategoryImg key={categoryImgURL.category} src={categoryImgURL.src} />;
              }
            })}
          </Link>
        </CardCategoryImgWrapper>
        {props.completed_at ? (
          <Button type="button" bgColor="#D5D9E0" color="#ffffff" borderRedius="6px" height="36px">
            완료됨
          </Button>
        ) : (
          <Button
            onClick={() => props.onClickButton(props.chore)}
            type="button"
            bgColor="#5D9EFF"
            color="#ffffff"
            borderRedius="6px"
            height="36px"
          >
            완료하기
          </Button>
        )}
      </StyledMyToDoCard>
    </>
  );
};

export default MyToDoCard;
