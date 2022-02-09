import Button from '../../atoms/Button/Button';
import CardButton from '../../atoms/CardButton/CardButton';
import Title from '../../atoms/Title/Title';
import { CardCategoryImg, CardCategoryImgWrapper, StyledMyToDoCard } from './MyToDoCardStyled';
import basket from '../../../../src_assets/basket.svg';
import pail from '../../../../src_assets/pail.svg';
import React from 'react';

export interface IMoleMyToDoCardProps {
  title: string;
  completed_at: string | null; //completed_at: Date | null;
  days: string;
  category: string;
}

const MyToDoCard = (props: IMoleMyToDoCardProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log('click');
  };
  return (
    <StyledMyToDoCard>
      <header className="myToDoCard_header">
        {props.completed_at ? (
          <CardButton className="meComplete">완료</CardButton>
        ) : (
          <CardButton className="meIncomplete">미완료</CardButton>
        )}
        <svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1.6" cy="1.6" r="1.6" fill="#56585B" />
          <circle cx="7.19961" cy="1.6" r="1.6" fill="#56585B" />
          <circle cx="12.8002" cy="1.6" r="1.6" fill="#56585B" />
        </svg>
      </header>
      <div className="cardInfo">
        <Title fontWeight="700" fontSize="16px" color="#3F4245">
          {props.title}
        </Title>
        <h6 className="subTitle">매주 {props.days}</h6>
      </div>
      <CardCategoryImgWrapper>
        {props.category === '세탁' && <CardCategoryImg src={basket} />}
        {props.category === '청소' && <CardCategoryImg src={pail} />}
      </CardCategoryImgWrapper>
      {props.completed_at ? (
        <Button onClick={onClick} type="button" bgColor="#D5D9E0" color="#ffffff" borderRedius="6px" height="36px">
          완료됨
        </Button>
      ) : (
        <Button onClick={onClick} type="button" bgColor="#5D9EFF" color="#ffffff" borderRedius="6px" height="36px">
          완료하기
        </Button>
      )}
    </StyledMyToDoCard>
  );
};

export default MyToDoCard;
