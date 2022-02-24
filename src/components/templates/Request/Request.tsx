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
import { User } from '../../../interfaces/user';
import { Chore } from '../../../interfaces/chore';
import { useNavigate } from 'react-router';
import { sendFavor } from '../../../apis/favor';

//하우스 구성원 목록 Dummy Data

interface IForm {
  message: string;
}

export interface ITempRequestProps {
  members: User[];
  chore: Chore;
}

const Request = ({ members, chore }: ITempRequestProps) => {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);
  const [choice, setChoice] = useState<User>();
  const { register, handleSubmit } = useForm<IForm>();

  const onMinusPageCount = () => {
    if (pageCount === 0) {
      navigate(-1);
      return;
    }
    setPageCount((prev) => prev - 1);
  };

  const onClickAvatar = (choice: User) => {
    setChoice(choice);
  };

  const onRequestChoiceButton = useCallback(() => {
    if (!choice) {
      alert('부탁할 사람을 고르세요');
      return;
    }
    setPageCount((prev) => prev + 1);
  }, [pageCount, choice]);

  const onVaild = ({ message }: IForm) => {
    console.log(message, choice);
    //부탁보내기
    if (!choice) return;
    sendFavor({ choreId: chore.id, toId: choice.id, content: message })
      .then(() => navigate('/main'))
      .catch((error) => console.log(error));
  };

  return (
    <AppLayout>
      <StyledRequest>
        <Header onClick={onMinusPageCount} mb="40px" title="부탁하기" />
        {pageCount === 0 && (
          <>
            <Title mb="150px" fontWeight="700" fontSize="23px" lineHeight="33.25px">
              <>
                {chore.information.name}를
                <br />
                누구에게 부탁할까요?
              </>
            </Title>
            <div className="request_main">
              <Swiper slidesPerView={'auto'} className="mySwiper" spaceBetween={12}>
                {members.map((member) => (
                  <SwiperSlide key={member.id}>
                    <AvatarName onClick={() => onClickAvatar(member)} first_name={member.first_name}>
                      {choice?.first_name === member.first_name && (
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="50" cy="50" r="50" fill="#5BADFF" fillOpacity="0.7" />
                          <path
                            d="M32.2578 46.7741L46.7739 61.2903L67.7417 40.3225"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="square"
                          />
                        </svg>
                      )}
                    </AvatarName>
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
              {choice?.first_name}님에게 남길 메세지를
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
