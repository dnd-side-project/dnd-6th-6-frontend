import { Chore, RepeatChore } from '../../../../interfaces/chore';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import HouseCard from '../../molecules/HouseCard/HouseCard';
import { StyledTodayToDoHouse } from './TodayToDoHouseStyled';

const todayToDoOthers: (Chore | RepeatChore)[] = [
  {
    id: 1,
    planned_at: new Date(),
    completed_at: new Date(),
    information: {
      id: 1,
      name: '분리수거',
      house: {
        id: 1,
        name: '서울하우스',
      },
      category: {
        id: 2,
        name: '분리수거',
      },
    },
    days: [
      {
        id: 1,
        name: '',
      },
    ],
    assignees: [
      {
        id: 1,
        first_name: '지현',
        username: '지현',
        user_profile: {
          id: 1,
          avatar: '',
          house: {
            id: 1,
            name: '서울하우스',
          },
        },
      },
    ],
  },
  {
    id: 2,
    planned_at: new Date(),
    completed_at: null,
    information: {
      id: 1,
      name: '분리수거',
      house: {
        id: 1,
        name: '서울하우스',
      },
      category: {
        id: 2,
        name: '분리수거',
      },
    },
    days: [
      {
        id: 1,
        name: '',
      },
    ],
    assignees: [
      {
        id: 1,
        first_name: '지현',
        username: '지현',
        user_profile: {
          id: 1,
          avatar: '',
          house: {
            id: 1,
            name: '서울하우스',
          },
        },
      },
      {
        id: 2,
        first_name: '재현',
        username: '재현',
        user_profile: {
          id: 1,
          avatar: '',
          house: {
            id: 1,
            name: '서울하우스',
          },
        },
      },
      {
        id: 3,
        first_name: '재훈',
        username: '재훈',
        user_profile: {
          id: 1,
          avatar: '',
          house: {
            id: 1,
            name: '서울하우스',
          },
        },
      },
    ],
  },
];

export interface IOrgTodayToDoHouseProps {
  // todayToDoOthers: (Chore | RepeatChore)[];
}

const TodayToDoHouse = (props: IOrgTodayToDoHouseProps) => {
  // 오늘 남의 할 일 목록 GET
  return (
    <StyledTodayToDoHouse>
      <div className="TodayToDoHouse_header">
        <Title fontWeight="700" fontSize="17px" color="#222222">
          하우스 할 일 현황
        </Title>
        <Time createdAt={new Date()} />
      </div>
      <div className="TodayToDoHouse_info">
        {/* 하우스 할 일 현황 없을떄 */}
        {todayToDoOthers.length === 0 && (
          <div className="TodayToDoHouse_noToDo">
            하우스의 휴일인가요?
            <br />
            오늘은 할 일이 없어요!
          </div>
        )}
        {/* 완료한 목록 위로 오게  */}
        {todayToDoOthers
          .filter((todayToDoOther) => todayToDoOther.completed_at)
          .map((todayToDoOther) => (
            <HouseCard
              key={todayToDoOther.id}
              completed_at={todayToDoOther.completed_at}
              planned_at={todayToDoOther.planned_at}
              event_title={todayToDoOther.information.name}
              assignees={todayToDoOther.assignees}
            />
          ))}
        {/* 완료하지 않은 목록 밑으로 가게  */}
        {todayToDoOthers
          .filter((todayToDoOther) => !todayToDoOther.completed_at)
          .map((todayToDoOther) => (
            <HouseCard
              key={todayToDoOther.id}
              completed_at={todayToDoOther.completed_at}
              planned_at={todayToDoOther.planned_at}
              event_title={todayToDoOther.information.name}
              assignees={todayToDoOther.assignees}
            />
          ))}
      </div>
    </StyledTodayToDoHouse>
  );
};

export default TodayToDoHouse;
