import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AppLayout from '../../Layouts/Applayout';
import Title from '../../UI/atoms/Title/Title';
import AvatarName from '../../UI/molecules/AvatarName/AvatarName';
import Header from '../../UI/molecules/Header/Header';
import { StyledRequest } from './RequestStyled';
import Button from '../../UI/atoms/Button/Button';
import { useCallback, useState } from 'react';
import SpeechBubble from '../../UI/molecules/SpeechBubble/SpeechBubble';
import { useForm } from 'react-hook-form';

//하우스 구성원 목록 Dummy Data
const members = [
  {
    id: 1,
    username: '유진',
    first_name: '유진',
    profile: {
      house: '서울하우스',
      gender: '남자',
      avatar: '',
      life_pattern: '',
      disposition: '',
      mbti: '',
      messsage: '',
    },
  },
  {
    id: 2,
    username: '유리',
    first_name: '유리',
    profile: {
      house: '서울하우스',
      gender: '남자',
      avatar: '',
      life_pattern: '',
      disposition: '',
      mbti: '',
      messsage: '',
    },
  },
  {
    id: 3,
    username: '수정',
    first_name: '수정',
    profile: {
      house: '서울하우스',
      gender: '여자',
      avatar: '',
      life_pattern: '',
      disposition: '',
      mbti: '',
      messsage: '',
    },
  },
  {
    id: 4,
    username: '유진',
    first_name: '유진',
    profile: {
      house: '서울하우스',
      gender: '여자',
      avatar: '',
      life_pattern: '',
      disposition: '',
      mbti: '',
      messsage: '',
    },
  },
];

interface IForm {
  message: string;
}

export interface ITempRequestProps {}

const Request = (props: ITempRequestProps) => {
  const [pageCount, setPageCount] = useState(0);
  const [choice, setChoice] = useState('');
  const { register, handleSubmit } = useForm<IForm>();
  const onMinusPageCount = () => {
    if (pageCount === 0) {
      return;
    }
    setPageCount((prev) => prev - 1);
  };

  const onClickAvatar = (first_name: string) => {
    setChoice(first_name);
  };

  const onRequestChoiceButton = useCallback(() => {
    if (!choice) {
      alert('부탁할 사람을 고르세요');
      return;
    }
    setPageCount((prev) => prev + 1);
  }, [pageCount, choice]);

  const onVaild = (data: IForm) => {
    console.log(data);
  };

  return (
    <AppLayout>
      <StyledRequest>
        <Header onClick={onMinusPageCount} mb="40px" title="부탁하기" />
        {pageCount === 0 && (
          <>
            <Title mb="150px" fontWeight="700" fontSize="23px" lineHeight="33.25px">
              <>
                다용도실 청소를
                <br />
                누구에게 부탁할까요?
              </>
            </Title>
            <div className="request_main">
              <Swiper
                slidesPerView={3}
                className="mySwiper"
                spaceBetween={12}
                breakpoints={{
                  370: {
                    slidesPerView: 3.5,
                    spaceBetween: 12,
                  },
                }}
              >
                {members.map((member) => (
                  <SwiperSlide key={member.id}>
                    <AvatarName onClick={() => onClickAvatar(member.first_name)} first_name={member.first_name} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Button
              onClick={onRequestChoiceButton}
              type="button"
              className="request_button"
              bgColor="#64ADF5"
              color="#ffffff"
            >
              선택하기
            </Button>
          </>
        )}
        {pageCount === 1 && (
          <>
            <Title mb="40px" fontWeight="700" fontSize="23px" lineHeight="33.25px">
              {choice}님에게 남길 메세지를
              <br />
              입력해주세요
              <br />
              <span className="request_notice">상세하게 작성하면 수락할 확률이 높아져요!</span>
            </Title>
            <form onSubmit={handleSubmit(onVaild)}>
              <div className="request_main">
                <SpeechBubble
                  register={{
                    ...register('message', {
                      required: '메세지를 입력하세요.',
                    }),
                  }}
                  request={true}
                />
              </div>
              <Button className="request_button" bgColor="#64ADF5" color="#ffffff">
                부탁하기
              </Button>
            </form>
          </>
        )}
      </StyledRequest>
    </AppLayout>
  );
};

export default Request;
