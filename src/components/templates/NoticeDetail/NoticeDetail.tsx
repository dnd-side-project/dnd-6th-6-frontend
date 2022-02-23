import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { INotice } from '../../../interfaces/notice';
import Header from '../../UI/molecules/Header/Header';
import NoticeCard from '../../UI/molecules/NoticeCard/NoticeCard';
import NoticeModal from '../../UI/molecules/NoticeModal/NoticeModal';
import { StyledNoticeDetail } from './NoticeDetailStyled';

export interface ITempNoticeDetailProps {
  notices: INotice[];
}

const NoticeDetail = ({ notices }: ITempNoticeDetailProps) => {
  const naveigate = useNavigate();
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [noticeId, setNoticeId] = useState<number>();
  const onClickNoticeCard = useCallback(
    (noticeId: number) => {
      setShowNoticeModal((prev) => !prev);
      setNoticeId(noticeId);
    },
    [showNoticeModal, noticeId],
  );
  const goBack = () => {
    naveigate(-1);
  };
  const onClickWrite = () => {
    naveigate('/notice/write');
  };
  return (
    <StyledNoticeDetail>
      <Header
        onClick={goBack}
        onClickThreeItem={onClickWrite}
        title="공지사항"
        itemCount={3}
        threeItemContent="글쓰기"
      />
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          noticeId={notice.id}
          first_name={notice.writer.first_name}
          content={notice.content}
          fix={false}
          createdAt={notice.writed_at}
          onClick={onClickNoticeCard}
        />
      ))}
      {showNoticeModal && <NoticeModal noticeId={noticeId} setShowNoticeModal={setShowNoticeModal} />}
    </StyledNoticeDetail>
  );
};

export default NoticeDetail;
