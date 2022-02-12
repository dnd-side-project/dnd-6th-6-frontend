import AppLayout from '../../Layouts/Applayout';
import Header from '../../UI/molecules/Header/Header';
import NotificationCard from '../../UI/molecules/NotificationCard/NotificationCard';
import { StyledNotification } from './NotificationStyled';

const notifications = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

export interface ITempNotificationProps {}

const Notification = () => {
  return (
    <AppLayout>
      <StyledNotification>
        <Header mb="36px" title="알림" />
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} mb="40px" />
        ))}
      </StyledNotification>
    </AppLayout>
  );
};

export default Notification;
