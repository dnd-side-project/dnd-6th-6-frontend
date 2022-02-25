import { Chore } from '../../../../interfaces/chore';
import Avatar from '../../atoms/Avatar/Avatar';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { StyledOneTimeEventCard } from './OneTimeEventCardStyled';

export interface IMoleOneTimeEventCardProps {
  chore: Chore;
}

const OneTimeEventCard = ({ chore }: IMoleOneTimeEventCardProps) => {
  return (
    <StyledOneTimeEventCard>
      <Title color="#3F4245" fontSize="18px" mb="7px">
        {chore.information.name}
      </Title>
      <div className="oneTimeChore_time">
        <Time className="chore" createdAt={chore.planned_at} />
      </div>
      <div className="oneTimeChore_info">
        <div className="oneTimeChore_avatar">
          {chore.assignees.map((assignee, index) => (
            <Avatar
              key={assignee.id}
              width="25.27px"
              height="25.27px"
              position="absolute"
              imgUrl={assignee.user_profile.avatar}
              number={index + 1}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V21C24 17.01 16.005 15 12 15Z"
                  fill="#9BCFFF"
                />
              </svg>
            </Avatar>
          ))}
        </div>
        <span>댓글 {chore.comments?.length}</span>
      </div>
    </StyledOneTimeEventCard>
  );
};

export default OneTimeEventCard;
