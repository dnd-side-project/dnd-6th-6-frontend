import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { INotice } from '../../../interfaces/notice';
import { User } from '../../../interfaces/user';
import Header from '../../UI/molecules/Header/Header';
import NoticeCard from '../../UI/molecules/NoticeCard/NoticeCard';
import NoticeModal from '../../UI/molecules/NoticeModal/NoticeModal';
import { StyledNoticeDetail } from './NoticeDetailStyled';

export interface ITempNoticeDetailProps {
  notices: INotice[];
  me: User;
}

const NoticeDetail = ({ me, notices }: ITempNoticeDetailProps) => {
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
    naveigate('/main');
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
      {showNoticeModal && <NoticeModal me={me} noticeId={noticeId} setShowNoticeModal={setShowNoticeModal} />}
    </StyledNoticeDetail>
  );
};

export default NoticeDetail;
