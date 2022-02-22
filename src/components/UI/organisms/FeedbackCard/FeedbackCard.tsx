import { StyledFeedbackCard } from './FeedbackCardStyled';
import basket from '../../../../src_assets/basket.svg';
import pail from '../../../../src_assets/pail.svg';
import heart from '../../../../src_assets/heart.svg';
import Avatar from '../../atoms/Avatar/Avatar';

const emojiImgURLs = [
  { src: heart, id: 1, emoji: '하트' },
  { src: basket, id: 2, emoji: '빨래' },
  { src: pail, id: 3, emoji: '청소' },
];

const categoryImgURLs = [
  { src: basket, id: 1, category: '빨래' },
  { src: pail, id: 2, category: '청소' },
];

export interface IOrgFeedbackCardProps {
  from_emojiIndex: number;
  from_firstName: string;
  from_avatar?: string;
  from_content: string;
  chore_completed_at: string; //Date
  information_categoryId: number;
  information_name: string;
}

const FeedbackCard = ({
  from_emojiIndex,
  from_firstName,
  from_avatar,
  from_content,
  chore_completed_at,
  information_categoryId,
  information_name,
}: IOrgFeedbackCardProps) => {
  return (
    <StyledFeedbackCard>
      <div className="feedbackCard_header">
        <div className="feedbackCard_category">
          <img src={categoryImgURLs.filter((categoryImgURL) => categoryImgURL.id === information_categoryId)[0].src} />
          <span>{information_name}</span>
        </div>
        <span className="feedbackCard_completeTime">{chore_completed_at} 완료</span>
      </div>
      <div className="feedbackCard_emoji">
        <img src={emojiImgURLs.filter((emojiImgURL) => emojiImgURL.id === from_emojiIndex)[0].src} />
      </div>
      <div className="feedbackCard_from">
        <div className="from_avatar">
          <Avatar imgUrl={from_avatar} width="30px" height="30px" />
          <span>{from_firstName}</span>
        </div>
        <p>{from_content}</p>
        <div className="from_simpleMessages">
          <div className="from_simpleMessage">정해진 일을 잘 수행했어요</div>
          <div className="from_simpleMessage">시간 약속을 잘 지켰어요</div>
        </div>
      </div>
    </StyledFeedbackCard>
  );
};

export default FeedbackCard;
