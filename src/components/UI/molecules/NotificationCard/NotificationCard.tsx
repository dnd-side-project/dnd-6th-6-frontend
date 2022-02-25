import Avatar from '../../atoms/Avatar/Avatar';
import Title from '../../atoms/Title/Title';
import { StyledNotificationCard } from './NotificationCardStyled';
import { ReactComponent as Profile } from '../../../../src_assets/profile.svg';
import { INotification } from '../../../../interfaces/notification';
import Time from '../../atoms/Time/Time';

export interface IMoleNotificationCardProps {
  notification: INotification;
  mb?: string;
}

const NotificationCard = ({ notification, mb }: IMoleNotificationCardProps) => {
  return (
    <StyledNotificationCard mb={mb || '0px'}>
      <Avatar width="48px" height="48px" bgColor="#EFF5FE" border={true}>
        <Profile />
      </Avatar>
      <div className="notification_info">
        <button className="notification_tag">
          {'favor' in notification && '부탁하기'}
          {'notice' in notification && '공지사항'}
          {'feedback' in notification && '피드백'}
        </button>
        <Title color="#3F4245" fontWeight="400" fontSize="14px">
          {'favor' in notification &&
            `${notification.favor?._from.first_name}님이 ${notification.favor?.chore.information.name}를 부탁했어요`}
          {'notice' in notification && `${notification.notice?.writer.first_name}님이 새로운 공지를 등록했어요`}
          {'feedback' in notification && `${notification.feedback?._from.first_name}님이 피드백을 남겼어요!`}
        </Title>
        <span>
          {'favor' in notification && `${notification.favor?._from.first_name}님의 부탁을 확인해 볼까요?`}
          {'notice' in notification && '공지사항을 확인해보세요'}
          {'feedback' in notification && `${notification.feedback?._from.first_name}님의 피드백을 확인해 볼까요?`}
        </span>
      </div>
      <Time className="basic" createdAt={notification.created_at} />
    </StyledNotificationCard>
  );
};

export default NotificationCard;
