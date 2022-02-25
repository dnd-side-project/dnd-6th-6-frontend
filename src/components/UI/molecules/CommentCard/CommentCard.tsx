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
          <Avatar imgUrl={avatar} width="26px" height="26px">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V21C24 17.01 16.005 15 12 15Z"
                fill="#9BCFFF"
              />
            </svg>
          </Avatar>
          <span>{first_name}</span>
        </div>
        <span>{writed_at}</span>
      </div>
      <p>{content}</p>
    </StyledCommentCard>
  );
};

export default CommentCard;
