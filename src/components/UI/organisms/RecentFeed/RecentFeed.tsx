import MyFeedCard from '../../molecules/MyFeedCard/MyFeedCard';
import { StyledRecentFeed } from './RecentFeedStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Feedback } from '../../../../interfaces/feedback';
import moment from 'moment';
import { emojiImgURLs } from '../../../../utils/emoji';
import { useNavigate } from 'react-router-dom';
import { INotification } from '../../../../interfaces/notification';

interface IRecentFeedProps {
  feedBackInfo: Feedback[];
  notification: INotification[];
}
const RecentFeed = ({ feedBackInfo, notification }: IRecentFeedProps) => {
  const navigate = useNavigate();
  return (
    <StyledRecentFeed>
      <div className="RecentFeedHeader">
        <div className="RecentFeedTitle">최근 받은 피드백</div>
        <div
          className="more_info"
          onClick={() => {
            navigate('/allFeed', { state: notification });
          }}
        >
          전체보기
        </div>
      </div>
      <Swiper slidesPerView={1.5} width={282} spaceBetween={12} className="mySwiper">
        {feedBackInfo.filter((feed) => {
          return moment(feed.sended_at).format('l') == moment().format('l');
        }).length > 0 ? (
          feedBackInfo
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
            ))
        ) : (
          <div className="todayToDo_blank">
            <img className="todayToDo_blank_image" src={emojiImgURLs[1].src} />
            <span>오늘 받은 피드백이 없어요!</span>
          </div>
        )}
      </Swiper>
    </StyledRecentFeed>
  );
};
export default RecentFeed;
