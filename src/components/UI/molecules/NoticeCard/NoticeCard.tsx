import CardButton from '../../atoms/CardButton/CardButton';
import { StledNoticeCard } from './NoticeCardStyled';

export interface IMoleNoticeCardProps {
  first_name: string;
  createdAt: Date;
  content: string;
  fix?: boolean;
}

const NoticeCard = ({ first_name, createdAt, content, fix }: IMoleNoticeCardProps) => {
  return (
    <StledNoticeCard>
      <div className="noticeCard_header">
        <div className="noticeCard_header_Info">
          <h3>{first_name}</h3>
          {fix && <CardButton className="noticeFix">고정</CardButton>}
          <span className="noticeCard_time">2월 16일 오후 3시</span>
        </div>
        <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13.5" cy="1.5" r="1.5" fill="#C4C4C4" />
          <circle cx="7.5" cy="1.5" r="1.5" fill="#C4C4C4" />
          <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
        </svg>
      </div>
      <p className="noticeCard_content">{content}</p>
    </StledNoticeCard>
  );
};

export default NoticeCard;
