import AppLayout from '../../Layouts/Applayout';
import Title from '../../UI/atoms/Title/Title';
import BottomNavBar from '../../UI/molecules/BottomNavBar/BottomNavBar';
import { StyledShareHouseWorkBlank } from './ShareHouseWorkBlankStyled';
import { ReactComponent as MakeEventBtn } from '../../../src_assets/makeEventBtn.svg';
import { Link } from 'react-router-dom';

export interface ITempShareHouseWorkBlankProps {}

const ShareHouseWorkBlank = () => {
  return (
    <>
      <AppLayout>
        <StyledShareHouseWorkBlank>
          <div className="ShareHouseWorkBlank_header">
            <h5>가사분담</h5>
            <Title color="#3F4245" fontSize="22px">
              만들어진 전체 가사
              <br />
              일정을 확인해 보세요!
            </Title>
          </div>
          <div className="ShareHouseWorkBlank_img"></div>
          <div className="ShareHouseWorkBlank_message">
            <span>아직 분담 계획이 없어요</span>
            <span>일정을 만들고 가사분담을 진행해보세요!</span>
          </div>
          <Link to="/event/make">
            <MakeEventBtn className="ShareHouseWorkBlank_makeEventBtn" />
          </Link>
        </StyledShareHouseWorkBlank>
      </AppLayout>
      <BottomNavBar />
    </>
  );
};

export default ShareHouseWorkBlank;
