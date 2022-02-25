import React from 'react';
import image from '../src_assets/DonotEnter.png';
import BottomNavBar from '../components/UI/molecules/BottomNavBar/BottomNavBar';
import '../styles/DonotEnter.css';
const ComplimentPage = () => {
  return (
    <div className="wrapper">
      <div>공사중입니다 돌아가세요</div>
      <img src={image} width={300} height={300} />
      <BottomNavBar />
    </div>
  );
};
export default ComplimentPage;
