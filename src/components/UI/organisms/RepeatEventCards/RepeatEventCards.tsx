import Title from '../../atoms/Title/Title';
import { StyledRepeatEventCards } from './RepeatEventCardsStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import RepeatEventCard from '../../molecules/RepeatEventCard/RepeatEventCard';
import { repeatChore1, repeatChore2 } from '../../../../dummyData/dummyRepeatChore';
import { Link } from 'react-router-dom';
import { RepeatChore } from '../../../../interfaces/chore';

export interface IOrgRepeatEventCardsProps {
  repeatChores: RepeatChore[];
}

const RepeatEventCards = ({ repeatChores }: IOrgRepeatEventCardsProps) => {
  return (
    <StyledRepeatEventCards>
      <Title color="#3F4245" fontSize="17px" mb="16px">
        반복 일정
      </Title>
      <Swiper slidesPerView={'auto'} spaceBetween={12} className="mySwiper">
        {repeatChores.length > 0 ? (
          repeatChores.map((repeatChore) => (
            <SwiperSlide key={repeatChore.id}>
              <Link to={`/event/${repeatChore.id}`}>
                <RepeatEventCard repeatChore={repeatChore} />
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <div className="todayToDo_blank">
            <div className="todayToDo_blank_image">스마일 이모지?</div>
            <span>오늘 할일이 없어요!</span>
          </div>
        )}
      </Swiper>
    </StyledRepeatEventCards>
  );
};

export default RepeatEventCards;
