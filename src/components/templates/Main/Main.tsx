import BottomNavBar from '../../UI/molecules/BottomNavBar/BottomNavBar';
import HouseMainTitle from '../../UI/molecules/HouseMainTitle/HouseMainTitle';
import Notice from '../../UI/molecules/Notice/Notice';
import MainHeader from '../../UI/organisms/MainHeader/MainHeader';
import TodayToDoHouse from '../../UI/organisms/TodayToDoHouse/TodayToDoHouse';
import TodayToDoMe from '../../UI/organisms/TodayToDoMe/TodayToDoMe';
import { StyledMain } from './MainStyled';

//하우스 구성원 목록 Dummy Data
const members = [
  {
    id: 1,
    username: '이재훈',
    first_name: '이재훈',
    profile: {
      house: '서울하우스',
      gender: '남자',
      avatar: '',
      life_pattern: '',
      disposition: '',
      mbti: '',
      messsage: '',
    },
  },
  {
    id: 2,
    username: '차동엽',
    first_name: '차동엽',
    profile: {
      house: '서울하우스',
      gender: '남자',
      avatar: '',
      life_pattern: '',
      disposition: '',
      mbti: '',
      messsage: '',
    },
  },
  {
    id: 3,
    username: '프론트',
    first_name: '프론트',
    profile: {
      house: '서울하우스',
      gender: '여자',
      avatar: '',
      life_pattern: '',
      disposition: '',
      mbti: '',
      messsage: '',
    },
  },
];

//로그인한 user 정보 Dummy Data
const me = {
  id: 1,
  username: '지수',
  first_name: '지수',
  profile: {
    house: '',
    gender: '여자',
    avatar: '',
    life_pattern: '',
    disposition: '',
    mbti: '',
    messsage: '',
  },
};

//하우스 정보 Dummy Data
const house = {
  id: 1,
  name: '서울하우스',
};

export interface ITempMainPorps {}

const Main = () => {
  // 로그인한 user정보 GET
  // 하우스 정보 GET
  // 하우스 맴버 정보 GET
  // Main 공지사항 정보 GET
  return (
    <>
      <StyledMain>
        <header className="main_header">
          <MainHeader mb="40px" />
          <HouseMainTitle first_name={me.first_name} house_name={house.name} />
        </header>
        <Notice notice_title="금요일에 모여서 다같이 대청소 하는 것은 어떨까요?" />
        <TodayToDoMe mb="6px" />
        <TodayToDoHouse />
      </StyledMain>
      <BottomNavBar />
    </>
  );
};

export default Main;
