import { StyledAllFeed } from './AllFeedStyled';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Header from '../../UI/molecules/Header/Header';
import AppLayout from '../../Layouts/Applayout';
import { Feedback } from '../../../interfaces/feedback';
import NotificationCard from '../../UI/molecules/NotificationCard/NotificationCard';
const AllFeed = () => {
  const navigate = useNavigate();
  const { state }: any = useLocation();
  console.log(state);
  return (
    <AppLayout>
      <StyledAllFeed>
        <Header
          onClick={() => {
            navigate(-1);
          }}
          mb="36px"
          title="피드백 전체보기"
        />
        {state.map((notification: any) => {
          if ('feedback' in notification) {
            return (
              <Link
                key={notification.id}
                to={`/feedback/${notification.feedback?.id}/chore/${notification.feedback?.chore.id}`}
              >
                <NotificationCard notification={notification} mb="40px" />
              </Link>
            );
          }
        })}
      </StyledAllFeed>
    </AppLayout>
  );
};

export default AllFeed;
