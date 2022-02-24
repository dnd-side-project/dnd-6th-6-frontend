import { Chore, RepeatChore } from '../../../../interfaces/chore';
import CardButton from '../../atoms/CardButton/CardButton';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import AvatarName from '../../molecules/AvatarName/AvatarName';
import { StyledEventDetailHeader } from './EventDetailHeaderStyled';

export interface IOrgEventDetailHeaderProps {
  chore: RepeatChore | Chore;
  isRepeatChore: boolean;
}

const EventDetailHeader = ({ chore, isRepeatChore }: IOrgEventDetailHeaderProps) => {
  function isRepeatChoreType(object: any): object is RepeatChore {
    return 'days' in object;
  }
  return (
    <StyledEventDetailHeader>
      <CardButton className="tag">{isRepeatChore ? '반복 일정' : '일회성 일정'}</CardButton>
      <Title color="#3F4245" fontSize="20px" mb="36px" lineHeight="32px">
        {chore.information.name}
      </Title>
      <div className="eventDetail_time">
        <h6>실행날짜</h6>
        {isRepeatChoreType(chore) ? (
          <span>매주 {chore.days.map((day) => day.name).join('요일, ')}요일</span>
        ) : (
          <Time className="chore" createdAt={chore.completed_at ? chore.completed_at : chore.planned_at} />
        )}
      </div>
      <div className="eventDetail_assignees">
        <h6>
          <span>담당자</span>
          <span>{chore.assignees.length}명</span>
        </h6>
        <div className="eventDetail_assignee">
          {chore.assignees.map((assignee) => (
            <AvatarName
              key={assignee.id}
              first_name={assignee.first_name}
              imgUrl={assignee.user_profile.avatar}
              avatarHeight="62px"
              avatarWidth="62px"
            />
          ))}
        </div>
      </div>
    </StyledEventDetailHeader>
  );
};

export default EventDetailHeader;
