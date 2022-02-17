import Title from '../../atoms/Title/Title';
import { StyledNotice } from './NoticeStyled';

export interface IMoleNoticeProps {
  notice_title: string;
  onClick: () => void;
}

const Notice = ({ notice_title, onClick }: IMoleNoticeProps) => {
  return (
    <StyledNotice onClick={onClick}>
      <div className="notice_title">
        <Title color="#6B717B" fontSize="12px" fontWeight="700">
          공지사항
        </Title>
      </div>
      <p className="notice_info">{notice_title.length > 24 ? notice_title.substr(0, 24) + '..' : notice_title}</p>
      <div className="arrow">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-6.60238e-07 9.10606L0.910025 10L6 5L0.910026 4.29101e-07L5.76888e-08 0.89394L4.17995 5L-6.60238e-07 9.10606Z"
            fill="#7A7F84"
          />
        </svg>
      </div>
    </StyledNotice>
  );
};

export default Notice;
