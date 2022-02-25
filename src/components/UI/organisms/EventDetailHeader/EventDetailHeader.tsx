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
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V21C24 17.01 16.005 15 12 15Z"
                  fill="#9BCFFF"
                />
              </svg>
            </AvatarName>
          ))}
        </div>
      </div>
    </StyledEventDetailHeader>
  );
};

export default EventDetailHeader;
