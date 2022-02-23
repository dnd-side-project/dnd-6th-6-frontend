import { chore1, chore2, chore3 } from '../../../../dummyData/dummyChore';
import { Chore, RepeatChore } from '../../../../interfaces/chore';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import HouseCard from '../../molecules/HouseCard/HouseCard';
import { StyledTodayToDoHouse } from './TodayToDoHouseStyled';

const todayToDoOthers: Chore[] = [chore1, chore2, chore3];

export interface IOrgTodayToDoHouseProps {
  // todayToDoOthers: Chore[];
}

const TodayToDoHouse = (props: IOrgTodayToDoHouseProps) => {
  // 오늘 남의 할 일 목록 GET
  return (
    <StyledTodayToDoHouse>
      <div className="TodayToDoHouse_header">
        <Title fontWeight="700" fontSize="17px" color="#222222">
          하우스 할 일 현황
        </Title>
        <Time className="chore" createdAt={new Date()} />
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
