import { useNavigate, useParams } from 'react-router';
import AppLayout from '../../Layouts/Applayout';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import { StyledFeedbackGive } from './FeedbackGiveStyled';
import FeedbackGiveForm from '../../UI/organisms/FeedbackGiveForm/FeedbackGiveForm';
import { Chore } from '../../../interfaces/chore';

export interface ITempFeedbackGiveProps {
  chore: Chore;
}

const FeedbackGive = ({ chore }: ITempFeedbackGiveProps) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <AppLayout>
      <StyledFeedbackGive>
        <Header onClick={goBack} title="피드백하기" mb="35px" />
        <div className="feedbackgive_title">
          <Title color="#3F4245" lineHeight="1.6" mb="4px">
            {chore.assignees.map((assigness) => assigness.first_name).join('님, ')}님이 거실 청소를
            <br />
            완료했어요!
          </Title>
          <h5>수정님에게 어떤 피드백을 보낼까요?</h5>
        </div>
        <FeedbackGiveForm choreId={chore.id} />
      </StyledFeedbackGive>
    </AppLayout>
  );
};

export default FeedbackGive;
