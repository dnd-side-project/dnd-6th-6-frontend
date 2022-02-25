import MyFeedCard from '../../molecules/MyFeedCard/MyFeedCard';
import { StyledRecentFeed } from './RecentFeedStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Feedback } from '../../../../interfaces/feedback';
import moment from 'moment';

interface IRecentFeedProps {
  feedBackInfo: Feedback[];
}
const RecentFeed = ({ feedBackInfo }: IRecentFeedProps) => {
  return (
    <StyledRecentFeed>
      <div className="RecentFeedHeader">
        <div className="RecentFeedTitle">최근 받은 피드백</div>
        <div className="more_info" onClick={() => {}}>
          전체보기
        </div>
      </div>
      <Swiper slidesPerView={1.5} width={282} spaceBetween={12} className="mySwiper">
        {feedBackInfo
          .filter((feed) => {
            return moment(feed.sended_at).format('l') == moment().format('l');
          })
          .map((feed) => (
            <SwiperSlide key={feed.id}>
              <MyFeedCard
                emojitype={feed.emoji}
                time={feed.sended_at}
                sender={feed._from.first_name}
                category={feed.chore.information.category.name}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledRecentFeed>
  );
};
export default RecentFeed;
