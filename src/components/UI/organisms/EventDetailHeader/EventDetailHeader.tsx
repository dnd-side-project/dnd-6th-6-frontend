import { User } from '../../../../interfaces/user';
import CardButton from '../../atoms/CardButton/CardButton';
import Title from '../../atoms/Title/Title';
import AvatarName from '../../molecules/AvatarName/AvatarName';
import { StyledEventDetailHeader } from './EventDetailHeaderStyled';

export interface IOrgEventDetailHeaderProps {
  name: string;
  planned_at: Date;
  completed_at: Date | null;
  assignees: User[];
  isRepeatChore: boolean;
}

const EventDetailHeader = ({
  name,
  planned_at,
  completed_at,
  assignees,
  isRepeatChore,
}: IOrgEventDetailHeaderProps) => {
  return (
    <StyledEventDetailHeader>
      <CardButton className="tag">{isRepeatChore ? '반복 일정' : '일회성 일정'}</CardButton>
      <Title color="#3F4245" fontSize="20px" mb="36px" lineHeight="32px">
        {name}
      </Title>
      <div className="eventDetail_time">
        <h6>실행날짜</h6>
        <span>매주 수요일 13:00</span>
      </div>
      <div className="eventDetail_assignees">
        <h6>
          <span>담당자</span>
          <span>{assignees.length}명</span>
        </h6>
        <div className="eventDetail_assignee">
          {assignees.map((assignee) => (
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
