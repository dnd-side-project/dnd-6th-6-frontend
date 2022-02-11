import Title from '../../atoms/Title/Title';
import HouseCard from '../../molecules/HouseCard/HouseCard';
import { StyledTodayToDoHouse } from './TodayToDoHouseStyled';

const todayToDoOthers = [
  {
    id: 1,
    planned_at: '2022년 02월 28일',
    completed_at: '2월 5일 금요알 13:30',
    information: {
      name: '분리수거',
      description: '6시까지 분리수거',
      category: '분리수거',
      repeat_chore: {
        days: ['금요일'],
      },
    },
    assignee: {
      id: 2,
      username: '지현',
      first_name: '지현',
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
  },
  {
    id: 2,
    planned_at: '2022년 02월 26일',
    completed_at: null,
    information: {
      name: '다용도실',
      description: '6시까지 다용도실 청소하기',
      category: '청소',
      repeat_chore: {
        days: ['금요일'],
      },
    },
    assignee: {
      id: 2,
      username: '지현',
      first_name: '지현',
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
  },
];

export interface IOrgTodayToDoHouseProps {}

const TodayToDoHouse = (props: IOrgTodayToDoHouseProps) => {
  // 오늘 남의 할 일 목록 GET
  return (
    <StyledTodayToDoHouse>
      <div className="TodayToDoHouse_header">
        <Title fontWeight="700" fontSize="17px" color="#222222">
          하우스 할 일 현황
        </Title>
        <span>2월 5일 토요일</span>
      </div>
      <div className="TodayToDoHouse_info">
        {/* 완료한 목록 위로 오게  */}
        {todayToDoOthers
          .filter((todayToDoOther) => todayToDoOther.completed_at)
          .map((todayToDoOther) => (
            <HouseCard
              key={todayToDoOther.id}
              completed_at={todayToDoOther.completed_at}
              event_title={todayToDoOther.information.name}
              first_name={todayToDoOther.assignee.first_name}
            />
          ))}
        {/* 완료하지 않은 목록 밑으로 가게  */}
        {todayToDoOthers
          .filter((todayToDoOther) => !todayToDoOther.completed_at)
          .map((todayToDoOther) => (
            <HouseCard
              key={todayToDoOther.id}
              completed_at={todayToDoOther.completed_at}
              event_title={todayToDoOther.information.name}
              first_name={todayToDoOther.assignee.first_name}
            />
          ))}
      </div>
    </StyledTodayToDoHouse>
  );
};

export default TodayToDoHouse;
