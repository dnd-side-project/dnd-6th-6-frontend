import Title from '../../atoms/Title/Title';
import HouseCard from '../../molecules/HouseCard/HouseCard';
import { StyledTodayToDoHouse } from './TodayToDoHouseStyled';

export interface IOrgTodayToDoHouseProps {}

const TodayToDoHouse = (props: IOrgTodayToDoHouseProps) => {
  return (
    <StyledTodayToDoHouse>
      <div className="TodayToDoHouse_header">
        <Title fontWeight="700" fontSize="17px" color="#222222">
          하우스 할 일 현황
        </Title>
        <span>2월 5일 토요일</span>
      </div>
      <div className="TodayToDoHouse_info">
        <HouseCard completed_at="2월 5일 토요일 13:30" event_title="분리수거" first_name="지현" />
        <HouseCard completed_at={null} event_title="분리수거" first_name="지현" />
      </div>
    </StyledTodayToDoHouse>
  );
};

export default TodayToDoHouse;
