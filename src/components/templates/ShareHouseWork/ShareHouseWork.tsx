import { Chore, RepeatChore } from '../../../interfaces/chore';
import BottomNavBar from '../../UI/molecules/BottomNavBar/BottomNavBar';
import OneTimeEventCards from '../../UI/organisms/OneTimeEventCards/OneTimeEventCards';
import RepeatEventCards from '../../UI/organisms/RepeatEventCards/RepeatEventCards';
import { StyledShareHouseWork } from './ShareHouseWorkStyled';

export interface ITempShareHouseWorkProps {
  repeatChores: RepeatChore[];
  oneTimeChores: Chore[];
}

const ShareHouseWork = ({ repeatChores, oneTimeChores }: ITempShareHouseWorkProps) => {
  return (
    <StyledShareHouseWork>
      <RepeatEventCards repeatChores={repeatChores} />
      <OneTimeEventCards oneTimeChores={oneTimeChores} />
      <BottomNavBar />
    </StyledShareHouseWork>
  );
};

export default ShareHouseWork;
