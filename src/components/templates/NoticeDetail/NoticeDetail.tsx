import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../UI/molecules/Header/Header';
import NoticeCard from '../../UI/molecules/NoticeCard/NoticeCard';
import NoticeModal from '../../UI/molecules/NoticeModal/NoticeModal';
import { StyledNoticeDetail } from './NoticeDetailStyled';

const notices = [
  {
    id: 1,
    first_name: '유리',
    createdAt: new Date(),
    content: '금요일에 모여서 다 같이 대청소해요! 시간 되는 분들은 모두 모여주시면 좋을 것 같습니다.',
    fix: true,
  },
  {
    id: 2,
    first_name: '수정',
    createdAt: new Date(),
    content:
      '세탁기가 고장나서 수리 기사님이 하우스에 방문할 예정이라고 합니다. 2시쯤 집에 계시는 분이 있으면 문을 열어주세요.',
    fix: false,
  },
  {
    id: 3,
    first_name: '지수',
    createdAt: new Date(),
    content: '내일 오전 10시부터 오후 4시까지 주택 시설 점검 때문에 단수 예정이래요!',
    fix: false,
  },
  {
    id: 4,
    first_name: '유리',
    createdAt: new Date(),
    content: '오늘 저녕 7시쯤 배달 음식 시키려고 하는데 혹시 같이 배달 비용 나누실 분 있으시면 알려주세요.',
    fix: false,
  },
  {
    id: 5,
    first_name: '수정',
    createdAt: new Date(),
    content: '이번 주에는 목요일에만 분리수거를 할 수 있다고 하네요! 분리수거 당번 참고해주세요.',
    fix: false,
  },
  {
    id: 6,
    first_name: '유진',
    createdAt: new Date(),
    content: '오늘 같이 장 보러 가실 분 있으면 말해주세요.',
    fix: false,
  },
];

export interface ITempNoticeDetailProps {}

const NoticeDetail = (props: ITempNoticeDetailProps) => {
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
          first_name={notice.first_name}
          content={notice.content}
          fix={notice.fix}
          createdAt={notice.createdAt}
          onClick={onClickNoticeCard}
        />
      ))}
      {showNoticeModal && <NoticeModal noticeId={noticeId} setShowNoticeModal={setShowNoticeModal} />}
    </StyledNoticeDetail>
  );
};

export default NoticeDetail;
