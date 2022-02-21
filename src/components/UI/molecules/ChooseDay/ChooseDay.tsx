import { Dispatch, SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DayWrapper, StyledChooseDay } from './ChooseDayStyled';

const days = ['월', '화', '수', '목', '금', '토', '일'];

export interface IMoleChooseDayProps {
  onClick: (day: string, index: number) => void;
  chooseDays: number[];
  setChooseDays?: Dispatch<SetStateAction<string[]>>;
}

const ChooseDay = ({ onClick, chooseDays }: IMoleChooseDayProps) => {
  // const [chooseDays, setChooseDays] = useState<string[]>([]);
  return (
    <StyledChooseDay>
      <Swiper slidesPerView={'auto'} className="mySwiper" spaceBetween={0}>
        {days.map((day, index) => (
          <SwiperSlide key={day}>
            <DayWrapper isChoose={chooseDays.includes(index + 1)} onClick={() => onClick(day, index)}>
              <span>{day}</span>
            </DayWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledChooseDay>
  );
};

export default ChooseDay;
