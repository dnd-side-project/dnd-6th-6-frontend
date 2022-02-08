import Title from '../../atoms/Title/Title';
import { StyledTodayToDoMe } from './TodayToDoMeStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MyToDoCard from '../../molecules/MyToDoCard/MyToDoCard';

export interface IOrgTodayToDoMeProps {}

const TodayToDoMe = (props: IOrgTodayToDoMeProps) => {
  return (
    <StyledTodayToDoMe>
      <div className="todayToDoMe_header">
        <div>
          <Title fontWeight="700" fontSize="17px" color="#222222">
            오늘 할 일
          </Title>
          <span>3건</span>
        </div>
        <span>전체보기</span>
      </div>
      <div>
        {/* 할일이 1개일때랑 여러개일떄 나누기 */}
        <Swiper slidesPerView={1.5} spaceBetween={10} className="mySwiper">
          <SwiperSlide>
            <MyToDoCard title="세탁하기 및 널기" completed_at={null} days="금요일" category="세탁" />
          </SwiperSlide>
          <SwiperSlide>
            <MyToDoCard title="다용도실 청소하기" completed_at="date" days="금요일" category="청소" />
          </SwiperSlide>
          <SwiperSlide>
            <MyToDoCard title="다용도실 청소하기" completed_at="date" days="금요일" category="청소" />
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledTodayToDoMe>
  );
};

export default TodayToDoMe;
