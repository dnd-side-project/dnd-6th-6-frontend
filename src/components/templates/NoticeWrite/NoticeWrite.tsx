import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { setNoticeAPI } from '../../../apis/notice';
import { User } from '../../../interfaces/user';
import AppLayout from '../../Layouts/Applayout';
import Textarea from '../../UI/atoms/Textarea/Textarea';
import Header from '../../UI/molecules/Header/Header';
import { StyledNoticeWrite } from './NoticeWriteStyled';

interface IForm {
  content: string;
}

export interface ITempNoticeWriteProps {
  me: User;
}

const NoticeWrite = ({ me }: ITempNoticeWriteProps) => {
  const navigate = useNavigate();
  const { register, watch } = useForm<IForm>();
  const goBack = () => {
    navigate(-1);
  };
  const onClickWriteClear = () => {
    // 글작성 API
    if (watch('content') === '') return;
    setNoticeAPI({ houseId: me.user_profile.house?.id as number, content: watch('content') })
      .then(() => navigate('/notice/detail'))
      .catch((e) => console.log(e));
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

      <Textarea
        register={{
          ...register('content', {
            required: true,
          }),
        }}
        height="80vh"
        placeholder="하우스 구성원과 공유할 내용을 입력해주세요"
      />
    </StyledNoticeWrite>
  );
};

export default NoticeWrite;
