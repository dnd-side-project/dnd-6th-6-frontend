import { useEffect, useState } from 'react';
import { RepeatChore } from '../../../../interfaces/chore';
import { categoryImgURLs } from '../../../../utils/category';
import Avatar from '../../atoms/Avatar/Avatar';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { StyledRepeatEventCard } from './RepeatEventCardStyled';

export interface IMoleRepeatEventCardProps {
  repeatChore: RepeatChore;
}

const RepeatEventCard = ({ repeatChore }: IMoleRepeatEventCardProps) => {
  const [dayArray, setdayArray] = useState<string[]>([]);
  useEffect(() => {
    setdayArray((prev) => [...repeatChore.days.map((day) => day.name)]);
  }, [repeatChore]);
  return (
    <StyledRepeatEventCard>
      <Title color="#3F4245" fontSize="16px" mb="7px">
        {repeatChore.information.name}
      </Title>
      <span className="repeatChore_time">매주 {dayArray.join('요일, ')}요일</span>
      <div className="repeatChore_category">
        <img
          src={
            categoryImgURLs.filter(
              (categoryImgURL) => categoryImgURL.category === repeatChore.information.category.name,
            )[0].src
          }
        />
      </div>
      <div className="repeatChore_info">
        <div className="repeatChore_avatar">
          {repeatChore.assignees.map((assignee, index) => (
            <Avatar
              key={assignee.id}
              width="25.27px"
              height="25.27px"
              position="absolute"
              imgUrl={assignee.user_profile.avatar}
              number={index + 1}
            />
          ))}
        </div>
        <span>댓글 {repeatChore.comments?.length}</span>
      </div>
    </StyledRepeatEventCard>
  );
};

export default RepeatEventCard;
