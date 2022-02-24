import { StyledFeedbackCard } from './FeedbackCardStyled';
import Avatar from '../../atoms/Avatar/Avatar';
import { categoryImgURLs } from '../../../../utils/category';
import { emojiImgURLs } from '../../../../utils/emoji';
import Time from '../../atoms/Time/Time';
import { useEffect, useState } from 'react';

export interface IOrgFeedbackCardProps {
  from_emojiIndex: number;
  from_firstName: string;
  from_avatar?: string;
  from_content: string;
  chore_completed_at: Date; //Date
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
  const [simpleMessages, setSimpleMessages] = useState<string[]>([]);
  useEffect(() => {
    if (from_content.indexOf(']') === from_content.length - 1 && from_content.indexOf('[') !== -1) {
      const contentArray = from_content.slice(from_content.indexOf('[')).split(',');
      const sliceContentArray = contentArray.map((content, index) =>
        index === 0 ? content.slice(1) : content.indexOf(']') !== -1 ? content.slice(0, -1) : content,
      );
      setSimpleMessages([...sliceContentArray]);
    }
  }, []);
  console.log(from_content);
  return (
    <StyledFeedbackCard>
      <div className="feedbackCard_header">
        <div className="feedbackCard_category">
          <img src={categoryImgURLs.filter((categoryImgURL) => categoryImgURL.id === information_categoryId)[0].src} />
          <span>{information_name}</span>
        </div>
        <span className="feedbackCard_completeTime">
          <Time className="chore" createdAt={chore_completed_at} /> 완료
        </span>
      </div>
      <div className="feedbackCard_emoji">
        <img src={emojiImgURLs.filter((emojiImgURL) => emojiImgURL.id === from_emojiIndex)[0].src} />
      </div>
      <div className="feedbackCard_from">
        <div className="from_avatar">
          <Avatar imgUrl={from_avatar} width="30px" height="30px" />
          <span>{from_firstName}</span>
        </div>
        <p>{from_content.slice().substring(0, from_content.indexOf('['))}</p>
        <div className="from_simpleMessages">
          {simpleMessages.map((simpleMessage) => (
            <div key={`${simpleMessage}`} className="from_simpleMessage">
              {simpleMessage}
            </div>
          ))}
        </div>
      </div>
    </StyledFeedbackCard>
  );
};

export default FeedbackCard;
