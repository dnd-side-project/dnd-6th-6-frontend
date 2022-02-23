import { useNavigate } from 'react-router';
import { Feedback } from '../../../interfaces/feedback';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import FeedbackCard from '../../UI/organisms/FeedbackCard/FeedbackCard';
import { StyledFeedbackAccept } from './FeedbackAcceptStyled';

// const feedback = feedback1;

export interface ITempFeedbackAcceptProps {
  feedback: Feedback;
}

const FeedbackAccept = ({ feedback }: ITempFeedbackAcceptProps) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <StyledFeedbackAccept>
      <Header onClick={goBack} title="받은 피드백" />
      <div className="feedbackAccept_info">
        <div className="feedbackAccept_header">
          <span>1시간 전</span>
          <Title color="#3F4245" lineHeight="1.6" fontSize="20px">
            유진님이 보낸
            <br />
            피드백이 도착했어요!
          </Title>
        </div>
        <div className="feedbackAccept_card">
          <FeedbackCard
            from_emojiIndex={1}
            from_firstName={feedback._from.first_name}
            from_avatar={feedback._from.user_profile.avatar}
            from_content={feedback.content}
            chore_completed_at={feedback.chore.completed_at as Date}
            information_categoryId={feedback.chore.information.category.id}
            information_name={feedback.chore.information.name}
          />
        </div>
        <Button type="submit" className="basic">
          확인
        </Button>
      </div>
    </StyledFeedbackAccept>
  );
};

export default FeedbackAccept;
