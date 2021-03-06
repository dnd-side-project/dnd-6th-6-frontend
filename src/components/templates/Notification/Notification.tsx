import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { INotification } from '../../../interfaces/notification';
import AppLayout from '../../Layouts/Applayout';
import Header from '../../UI/molecules/Header/Header';
import NotificationCard from '../../UI/molecules/NotificationCard/NotificationCard';
import { StyledNotification } from './NotificationStyled';
import {
  patchfeedNotificationAPI,
  patchnoticeNotificationAPI,
  patchfavorNotificationAPI,
} from '../../../apis/notification';

export interface ITempNotificationProps {
  notifications: INotification[];
}

const Notification = ({ notifications }: ITempNotificationProps) => {
  const navigate = useNavigate();
  console.log(notifications);
  const goBack = () => {
    navigate(-1);
  };
  return (
    <AppLayout>
      <StyledNotification>
        <Header onClick={goBack} mb="36px" title="알림" />
        {notifications.map((notification) => {
          if ('feedback' in notification) {
            return (
              <Link
                key={`${notification.id}${notification.feedback?.id}${notification.created_at}`}
                to={`/feedback/${notification.feedback?.id}/chore/${notification.feedback?.chore.id}`}
                onClick={() => patchfeedNotificationAPI(notification.id)}
              >
                <NotificationCard notification={notification} mb="40px" />
              </Link>
            );
          }
          if ('notice' in notification) {
            return (
              <Link
                key={`${notification.id}${notification.notice?.id}${notification.created_at}`}
                to={`/notice/detail`}
                onClick={() => patchnoticeNotificationAPI(notification.id)}
              >
                <NotificationCard notification={notification} mb="40px" />
              </Link>
            );
          }
          if ('favor' in notification) {
            return (
              <Link
                key={`${notification.id}${notification.favor?.id}${notification.created_at}`}
                to={`/request/${notification.favor?.chore.id}/favor/${notification.favor?.id}`}
                onClick={() => patchfavorNotificationAPI(notification.id)}
              >
                <NotificationCard notification={notification} mb="40px" />
              </Link>
            );
          }
        })}
      </StyledNotification>
    </AppLayout>
  );
};

export default Notification;
