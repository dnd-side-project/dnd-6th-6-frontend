import Title from '../../atoms/Title/Title';
import { StyledTodayToDoMe } from './TodayToDoMeStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MyToDoCard from '../../molecules/MyToDoCard/MyToDoCard';

//오늘 내 할 일 목록 Dummy Data
const todayToDos = [
  {
    id: 1,
    planned_at: '2022년 02월 28일',
    completed_at: null,
    information: {
      name: '세탁하기 및 널기',
      description: '6시까지 세탁하기 및 널기',
      category: '세탁',
      repeat_chore: {
        days: ['금요일'],
      },
    },
  },
  {
    id: 2,
    planned_at: '2022년 02월 26일',
    completed_at: '2022년 02월 25일',
    information: {
      name: '다용도실 청소하기',
      description: '6시까지 다용도실 청소하기',
      category: '청소',
      repeat_chore: {
        days: ['금요일'],
      },
    },
  },
];

export interface IOrgTodayToDoMeProps {
  mb?: string;
}

const TodayToDoMe = (props: IOrgTodayToDoMeProps) => {
  // 오늘 내 할 일 목록 GET
  return (
    <StyledTodayToDoMe mb={props.mb}>
      <div className="todayToDoMe_header">
        <div>
          <Title fontWeight="700" fontSize="17px" color="#222222">
            오늘 할 일
          </Title>
          <span>{todayToDos.length}건</span>
        </div>
        <span>전체보기</span>
      </div>
      <div>
        {/* 할일이 1개일때랑 여러개일떄 나누기 */}
        <Swiper slidesPerView={1.5} spaceBetween={10} className="mySwiper">
          {todayToDos.map((todayToDo) => (
            <SwiperSlide key={todayToDo.id}>
              <MyToDoCard
                title={todayToDo.information.name}
                completed_at={todayToDo.completed_at}
                days={todayToDo.information.repeat_chore.days[0]}
                category={todayToDo.information.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledTodayToDoMe>
  );
};

export default TodayToDoMe;
