import { useNavigate } from 'react-router';
import { Chore, RepeatChore } from '../../../interfaces/chore';
import { ChoreComment, RepeatChoreComment } from '../../../interfaces/comment';
import { User } from '../../../interfaces/user';
import { categoryImgURLs } from '../../../utils/category';
import CommentForm from '../../UI/molecules/CommentForm/CommentForm';
import Header from '../../UI/molecules/Header/Header';
import Comments from '../../UI/organisms/Comments/Comments';
import EventDetailHeader from '../../UI/organisms/EventDetailHeader/EventDetailHeader';
import { StyledEventDetail } from './EventDetailStyled';

export interface ITempEventDetailProps {
  // 나중에 ?지워야함
  chore: RepeatChore | Chore;
  comments: RepeatChoreComment[] | ChoreComment[];
  me: User;
}

const EventDetail = ({ chore, comments, me }: ITempEventDetailProps) => {
  const navigate = useNavigate();
  // chore type guard
  function isRepeatChoreType(object: any): object is RepeatChore {
    return 'days' in object;
  }
  const goBack = () => {
    navigate(-1);
  };
  const goEditEvent = () => {
    navigate('/event/make', { state: chore });
  };
  return (
    <StyledEventDetail>
      <div className="eventDetail_info">
        {chore.assignees.filter((assignee) => assignee.id === me.id).length === 1 ? (
          <Header
            onClick={goBack}
            onClickThreeItem={goEditEvent}
            title="일정 상세보기"
            threeItemContent="편집"
            itemCount={3}
            mb="10px"
          />
        ) : (
          <Header onClick={goBack} title="일정 상세보기" />
        )}
        {isRepeatChoreType(chore) ? (
          <>
            <div className="eventDetail_category">
              <img src={categoryImgURLs.filter((categoryImgURL) => categoryImgURL.id === 1)[0].src} />
            </div>
            <EventDetailHeader chore={chore} isRepeatChore={true} />
          </>
        ) : (
          <EventDetailHeader chore={chore} isRepeatChore={false} />
        )}
      </div>
      <Comments comments={comments} />
      <CommentForm avatar={me.user_profile.avatar || ''} />
    </StyledEventDetail>
  );
};

export default EventDetail;
