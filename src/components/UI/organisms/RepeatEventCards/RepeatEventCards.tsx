import Title from '../../atoms/Title/Title';
import { StyledRepeatEventCards } from './RepeatEventCardsStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import RepeatEventCard from '../../molecules/RepeatEventCard/RepeatEventCard';
import { Link } from 'react-router-dom';
import { RepeatChore } from '../../../../interfaces/chore';
import { emojiImgURLs } from '../../../../utils/emoji';

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
              <Link to={`/event/repeat/${repeatChore.id}`}>
                <RepeatEventCard repeatChore={repeatChore} />
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <div className="todayToDo_blank">
            <img className="todayToDo_blank_image" src={emojiImgURLs[1].src} />
            <span>오늘 할일이 없어요!</span>
          </div>
        )}
      </Swiper>
    </StyledRepeatEventCards>
  );
};

export default RepeatEventCards;
