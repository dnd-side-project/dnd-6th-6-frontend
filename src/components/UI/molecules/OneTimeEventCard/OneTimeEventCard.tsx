import { chore1, chore2, chore3 } from '../../../../dummyData/dummyChore';
import { Chore } from '../../../../interfaces/chore';
import Avatar from '../../atoms/Avatar/Avatar';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { StyledOneTimeEventCard } from './OneTimeEventCardStyled';

const oneTimeChore = chore1;

export interface IMoleOneTimeEventCardProps {
  chore: Chore;
}

const OneTimeEventCard = (props: IMoleOneTimeEventCardProps) => {
  return (
    <StyledOneTimeEventCard>
      <Title color="#3F4245" fontSize="18px" mb="7px">
        {oneTimeChore.information.name}
      </Title>
      <div className="oneTimeChore_time">
        <Time className="chore" createdAt={oneTimeChore.planned_at} />
      </div>
      <div className="oneTimeChore_info">
        <div className="oneTimeChore_avatar">
          {oneTimeChore.assignees.map((assignee) => (
            <Avatar imgUrl={assignee.user_profile.avatar} />
          ))}
        </div>
        <span>댓글 {oneTimeChore.comments?.length}</span>
      </div>
    </StyledOneTimeEventCard>
  );
};

export default OneTimeEventCard;
