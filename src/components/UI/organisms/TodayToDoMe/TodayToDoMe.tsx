import Title from '../../atoms/Title/Title';
import { StyledTodayToDoMe } from './TodayToDoMeStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MyToDoCard from '../../molecules/MyToDoCard/MyToDoCard';
import { Chore } from '../../../../interfaces/chore';
import { chore1, chore2, chore3 } from '../../../../dummyData/dummyChore';
import { emojiImgURLs } from '../../../../utils/emoji';

//오늘 내 할 일 목록 Dummy Data
const todayToDos: Chore[] = [chore3, chore2, chore1];

export interface IOrgTodayToDoMeProps {
  mb?: string;
  todayToDos: Chore[];
}

const TodayToDoMe = ({ todayToDos, mb }: IOrgTodayToDoMeProps) => {
  // 오늘 내 할 일 목록 GET
  return (
    <StyledTodayToDoMe mb={mb}>
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
                <MyToDoCard
                  title={todayToDo.information.name}
                  completed_at={todayToDo.completed_at}
                  category={todayToDo.information.category.name}
                />
              </SwiperSlide>
            ))
          ) : (
            <div className="todayToDo_blank">
              <img className="todayToDo_blank_image" src={emojiImgURLs[1].src} />
              <span>오늘 할일이 없어요!</span>
            </div>
          )}
        </Swiper>
      </div>
    </StyledTodayToDoMe>
  );
};

export default TodayToDoMe;
