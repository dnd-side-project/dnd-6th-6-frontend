import { Dispatch, SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Day } from '../../../../interfaces/chore';
import { DayWrapper, StyledChooseDay } from './ChooseDayStyled';

const days: Day[] = [
  { id: 1, name: '월' },
  { id: 2, name: '화' },
  { id: 3, name: '수' },
  { id: 4, name: '목' },
  { id: 5, name: '금' },
  { id: 6, name: '토' },
  { id: 7, name: '일' },
];

export interface IMoleChooseDayProps {
  onClick: (day: Day, index: number) => void;
  chooseDays: Day[];
  setChooseDays?: Dispatch<SetStateAction<string[]>>;
}

const ChooseDay = ({ onClick, chooseDays }: IMoleChooseDayProps) => {
  // const [chooseDays, setChooseDays] = useState<string[]>([]);
  return (
    <StyledChooseDay>
      <Swiper slidesPerView={'auto'} className="mySwiper" spaceBetween={0}>
        {days.map((day, index) => (
          <SwiperSlide key={day.id}>
            <DayWrapper isChoose={chooseDays.includes(day)} onClick={() => onClick(day, index)}>
              <span>{day.name}</span>
            </DayWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledChooseDay>
  );
};

export default ChooseDay;
