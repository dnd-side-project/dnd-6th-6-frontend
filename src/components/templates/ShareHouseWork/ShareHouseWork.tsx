import { Link } from 'react-router-dom';
import { Chore, RepeatChore } from '../../../interfaces/chore';
import Title from '../../UI/atoms/Title/Title';
import BottomNavBar from '../../UI/molecules/BottomNavBar/BottomNavBar';
import OneTimeEventCards from '../../UI/organisms/OneTimeEventCards/OneTimeEventCards';
import RepeatEventCards from '../../UI/organisms/RepeatEventCards/RepeatEventCards';
import { StyledShareHouseWork } from './ShareHouseWorkStyled';
import { ReactComponent as MakeEventBtn } from '../../../src_assets/makeEventBtn.svg';
export interface ITempShareHouseWorkProps {
  repeatChores: RepeatChore[];
  oneTimeChores: Chore[];
}

const ShareHouseWork = ({ repeatChores, oneTimeChores }: ITempShareHouseWorkProps) => {
  return (
    <StyledShareHouseWork>
      <div className="ShareHouseWork_title">
        <Title color="#3F4245" fontWeight="700">
          가사분담 2월
        </Title>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.25151 4.22132e-07L-2.96653e-07 1.21337L7 8L14 1.21337L12.7485 -8.04168e-08L7 5.57326L1.25151 4.22132e-07Z"
            fill="#3F4245"
          />
        </svg>
      </div>
      <RepeatEventCards repeatChores={repeatChores} />
      <OneTimeEventCards oneTimeChores={oneTimeChores} />
      <Link to="/event/make">
        <MakeEventBtn className="ShareHouseWorkBlank_makeEventBtn" />
      </Link>
      <BottomNavBar />
    </StyledShareHouseWork>
  );
};

export default ShareHouseWork;
