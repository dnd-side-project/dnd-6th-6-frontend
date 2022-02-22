import Avatar from '../../atoms/Avatar/Avatar';
import { StyledCommentCard } from './CommentCardStyled';

export interface IMoleCommentCardProps {
  first_name: string;
  avatar?: string;
  content: string;
  writed_at: string; //Date
}

const CommentCard = ({ first_name, avatar, writed_at, content }: IMoleCommentCardProps) => {
  return (
    <StyledCommentCard>
      <div className="commentCard_header">
        <div className="commentCard_writer">
          <Avatar imgUrl={avatar} width="26px" height="26px" />
          <span>{first_name}</span>
        </div>
        <span>{writed_at}</span>
      </div>
      <p>{content}</p>
    </StyledCommentCard>
  );
};

export default CommentCard;
