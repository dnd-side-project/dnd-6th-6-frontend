import { useNavigate } from 'react-router';
import AppLayout from '../../Layouts/Applayout';
import Textarea from '../../UI/atoms/Textarea/Textarea';
import Header from '../../UI/molecules/Header/Header';
import { StyledNoticeWrite } from './NoticeWriteStyled';

export interface ITempNoticeWriteProps {}

const NoticeWrite = (props: ITempNoticeWriteProps) => {
  const naveigate = useNavigate();
  const goBack = () => {
    naveigate(-1);
  };
  const onClickWriteClear = () => {
    // 글작성 API
  };
  return (
    <StyledNoticeWrite>
      <Header
        onClick={goBack}
        onClickThreeItem={onClickWriteClear}
        mb="18px"
        title="글쓰기"
        threeItemContent="완료"
        itemCount={3}
      />
      <Textarea height="80vh" placeholder="하우스 구성원과 공유할 내용을 입력해주세요" />
    </StyledNoticeWrite>
  );
};

export default NoticeWrite;
