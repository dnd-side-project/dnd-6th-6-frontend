import Title from '../../atoms/Title/Title';
import { StyledTodayToDoMe } from './TodayToDoMeStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MyToDoCard from '../../molecules/MyToDoCard/MyToDoCard';
import { Chore, RepeatChore } from '../../../../interfaces/chore';

//오늘 내 할 일 목록 Dummy Data
const todayToDos: (Chore | RepeatChore)[] = [
  {
    id: 1,
    planned_at: new Date(),
    completed_at: null,
    assignees: [
      {
        id: 1,
        first_name: '지수',
        username: '지수',
        user_profile: {
          id: 1,
          avatar: '',
        },
      },
    ],
    information: {
      id: 1,
      name: '세탁하기 및 널기',
      category: {
        id: 1,
        name: '세탁',
      },
      house: {
        id: 1,
        name: '서울하우스',
      },
    },
    days: [
      {
        id: 4,
        name: '목',
      },
    ],
  },
  {
    id: 2,
    planned_at: new Date(),
    completed_at: new Date(),
    assignees: [
      {
        id: 1,
        first_name: '지수',
        username: '지수',
        user_profile: {
          id: 1,
          avatar: '',
        },
      },
    ],
    information: {
      id: 1,
      name: '다용도실 청소하기',
      category: {
        id: 1,
        name: '청소',
      },
      house: {
        id: 1,
        name: '서울하우스',
      },
    },
  },
];

export interface IOrgTodayToDoMeProps {
  mb?: string;
}

const TodayToDoMe = (props: IOrgTodayToDoMeProps) => {
  // 오늘 내 할 일 목록 GET
  function isRepeatChoreType(object: any): object is RepeatChore {
    return 'days' in object;
  }
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
        <Swiper slidesPerView={'auto'} spaceBetween={12} className="mySwiper">
          {todayToDos.length > 0 ? (
            todayToDos.map((todayToDo) => (
              <SwiperSlide key={todayToDo.id}>
                {isRepeatChoreType(todayToDo) ? (
                  <MyToDoCard
                    title={todayToDo.information.name}
                    completed_at={todayToDo.completed_at}
                    days={todayToDo.days[0].name}
                    category={todayToDo.information.category.name}
                  />
                ) : (
                  <MyToDoCard
                    title={todayToDo.information.name}
                    completed_at={todayToDo.completed_at}
                    category={todayToDo.information.category.name}
                  />
                )}
              </SwiperSlide>
            ))
          ) : (
            <div className="todayToDo_blank">
              <div className="todayToDo_blank_image">스마일 이모지?</div>
              <span>오늘 할일이 없어요!</span>
            </div>
          )}
        </Swiper>
      </div>
    </StyledTodayToDoMe>
  );
};

export default TodayToDoMe;
