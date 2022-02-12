import Avatar from '../../atoms/Avatar/Avatar';
import Title from '../../atoms/Title/Title';
import { StyledNotificationCard } from './NotificationCardStyled';
import { ReactComponent as Profile } from '../../../../src_assets/profile.svg';

export interface IMoleNotificationCardProps {
  mb?: string;
}

const NotificationCard = (props: IMoleNotificationCardProps) => {
  return (
    <StyledNotificationCard mb={props.mb || '0px'}>
      <Avatar width="48px" height="48px" bgColor="#EFF5FE" border={true}>
        <Profile />
      </Avatar>
      <div className="notification_info">
        <button className="notification_tag">부탁하기</button>
        <Title color="#3F4245" fontWeight="400" fontSize="14px">
          유리님이 주방 청소를 모두 마쳤어요.
        </Title>
        <span>유리님께 피드백을 남겨보세요!</span>
      </div>
      <div className="notification_time">5분전</div>
    </StyledNotificationCard>
  );
};

export default NotificationCard;
