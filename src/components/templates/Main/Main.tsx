import { useNavigate } from 'react-router';
import { user1, user2, user3 } from '../../../dummyData/dummyUser';
import { Chore, RepeatChore } from '../../../interfaces/chore';
import { INotice } from '../../../interfaces/notice';
import { User } from '../../../interfaces/user';
import { Member } from '../../../interfaces/house';
import BottomNavBar from '../../UI/molecules/BottomNavBar/BottomNavBar';
import HouseMainTitle from '../../UI/molecules/HouseMainTitle/HouseMainTitle';
import Notice from '../../UI/molecules/Notice/Notice';
import MainHeader from '../../UI/organisms/MainHeader/MainHeader';
import TodayToDoHouse from '../../UI/organisms/TodayToDoHouse/TodayToDoHouse';
import TodayToDoMe from '../../UI/organisms/TodayToDoMe/TodayToDoMe';
import { StyledMain } from './MainStyled';

//하우스 구성원 목록 Dummy Data
const members = [user1, user2, user3];

// 로그인한 user 정보 Dummy Data
// const me = user1;

//하우스 정보 Dummy Data
const house = {
  id: 1,
  name: '서울하우스',
};

export interface ITempMainProps {
  me: User;
  todayChoresMe: Chore[];
  todayChoresOther: Chore[];
  notice: INotice[];
  houseMemberInfo: Member[];
}

const Main = ({ me, todayChoresMe, todayChoresOther, notice, houseMemberInfo }: ITempMainProps) => {
  const navigate = useNavigate();
  // 로그인한 user정보 GET
  // 하우스 정보 GET
  // 하우스 맴버 정보 GET
  // Main 공지사항 정보 GET
  const onClickNotice = () => {
    navigate('/notice/detail');
  };
  return (
    <>
      <StyledMain>
        <header className="main_header">
          <MainHeader mb="40px" houseMemberInfo={houseMemberInfo} />
          <HouseMainTitle first_name={me.first_name} house_name={house.name} />
        </header>
        <Notice onClick={onClickNotice} notice_title={notice[0]?.content || ''} />
        <TodayToDoMe todayToDos={todayChoresMe} mb="6px" />
        <TodayToDoHouse todayToDoOthers={todayChoresOther} />
      </StyledMain>
      <BottomNavBar />
    </>
  );
};

export default Main;
