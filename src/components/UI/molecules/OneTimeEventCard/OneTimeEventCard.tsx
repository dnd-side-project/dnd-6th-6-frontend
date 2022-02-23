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
              width="25.27px"
              height="25.27px"
              position="absolute"
              imgUrl={assignee.user_profile.avatar}
              number={index + 1}
            />
          ))}
        </div>
        <span>댓글 {chore.comments?.length}</span>
      </div>
    </StyledOneTimeEventCard>
  );
};

export default OneTimeEventCard;
