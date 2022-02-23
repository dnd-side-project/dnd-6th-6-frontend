import { useNavigate } from 'react-router';
import { INotification } from '../../../interfaces/notification';
import AppLayout from '../../Layouts/Applayout';
import Header from '../../UI/molecules/Header/Header';
import NotificationCard from '../../UI/molecules/NotificationCard/NotificationCard';
import { StyledNotification } from './NotificationStyled';

export interface ITempNotificationProps {
  notifications: INotification[];
}

const Notification = ({ notifications }: ITempNotificationProps) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <AppLayout>
      <StyledNotification>
        <Header onClick={goBack} mb="36px" title="알림" />
        {notifications.map((notification) => (
          <NotificationCard notification={notification} key={notification.id} mb="40px" />
        ))}
      </StyledNotification>
    </AppLayout>
  );
};

export default Notification;
