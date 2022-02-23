import MyFeedCard from '../../molecules/MyFeedCard/MyFeedCard';
import { StyledRecentFeed } from './RecentFeedStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const RecentFeed = () => {
  const feedlist = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 2 }, { id: 2 }];
  return (
    <StyledRecentFeed>
      <div className="RecentFeedHeader">
        <div className="RecentFeedTitle">최근 받은 피드백</div>
        <div className="more_info" onClick={() => {}}>
          전체 목록
        </div>
      </div>
      <Swiper slidesPerView={1.5} width={282} spaceBetween={12} className="mySwiper">
        {feedlist.map((feed) => (
          <SwiperSlide key={feed.id}>
            <MyFeedCard time={'30분전'} sender="동엽" emojiindex={3} mywork="청소" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledRecentFeed>
  );
};
export default RecentFeed;
