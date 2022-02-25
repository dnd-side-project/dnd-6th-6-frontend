import React from 'react';
import BottomNavBar from '../components/UI/molecules/BottomNavBar/BottomNavBar';
import donotenter from '../src_assets/DonotEnter.png';
const ComplimentPage = () => {
  return (
    <>
      <div>공사중입니다 돌아가세요</div>
      <img src={donotenter} />
      <BottomNavBar />
    </>
  );
};
export default ComplimentPage;
