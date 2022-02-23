import CommentCard from '../../molecules/CommentCard/CommentCard';
import { StyledComments } from './CommentsStyled';
import { ChoreComment, RepeatChoreComment } from '../../../../interfaces/comment';

export interface IOrgCommentsProps {
  comments: (RepeatChoreComment | ChoreComment)[];
}

const Comments = ({ comments }: IOrgCommentsProps) => {
  return (
    <StyledComments>
      <div className="comments_length">
        <span>댓글</span>
        <span>{comments.length}개</span>
      </div>
      <div className="comments">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            first_name={comment.writer.first_name}
            avatar={comment.writer.user_profile.avatar}
            writed_at="5분 전"
            content={comment.content}
          />
        ))}
      </div>
    </StyledComments>
  );
};

export default Comments;
