import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../../Layouts/Applayout';
import { ReactComponent as HouseMaking } from '../../../src_assets/HouseMaking.svg';
import MainHeader from '../../UI/organisms/MainHeader/MainHeader';
import { StyledHouseNone } from './HouseNoneStyled';
import HouseMainTitle from '../../UI/molecules/HouseMainTitle/HouseMainTitle';
import Label from '../../UI/atoms/Label/Label';
import Button from '../../UI/atoms/Button/Button';
import BottomNavBar from '../../UI/molecules/BottomNavBar/BottomNavBar';

const HouseNone = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <StyledHouseNone>
        <MainHeader mb="28px" />
        <HouseMainTitle first_name={'지우'} />
        <div className="LabelWrapper">
          <Label color="#565A5E">하우스를 만들거나 초대받아 입장할 수 있어요.</Label>
          <Label color="#565A5E">초대가 오면 알람을 통해 알려드릴게요.</Label>
        </div>
        <div className="Wrapper">
          <div className="IconWrapper">
            <HouseMaking width={141} height={148} />
          </div>
          <Button
            className="basic"
            onClick={() => {
              navigate('/housemake');
            }}
          >
            새로운 하우스 만들기
          </Button>
        </div>
      </StyledHouseNone>
      <BottomNavBar />
    </AppLayout>
  );
};
export default HouseNone;
