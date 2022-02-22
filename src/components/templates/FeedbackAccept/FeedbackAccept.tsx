import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import FeedbackCard from '../../UI/organisms/FeedbackCard/FeedbackCard';
import { StyledFeedbackAccept } from './FeedbackAcceptStyled';

export interface ITempFeedbackAcceptProps {
  // chore: Chore
}

const FeedbackAccept = (props: ITempFeedbackAcceptProps) => {
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
            from_firstName="유진"
            from_avatar=""
            from_content="오늘 하루도 고마워!! 깔끔하게 잘 했던데? 다음에 내 차례가 되면 나도 이만큼 해야할듯ㅠㅠ"
            chore_completed_at="2월 23일 13:30"
            information_categoryId={1}
            information_name="분리수거 하기"
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
