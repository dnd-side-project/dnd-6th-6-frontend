import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AppLayout from '../../Layouts/Applayout';
import Title from '../../UI/atoms/Title/Title';
import AvatarName from '../../UI/molecules/AvatarName/AvatarName';
import Header from '../../UI/molecules/Header/Header';
import { StyledRequest } from './RequestStyled';
import Button from '../../UI/atoms/Button/Button';

//하우스 구성원 목록 Dummy Data
const members = [
  {
    id: 1,
    username: '유진',
    first_name: '이재훈',
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
    first_name: '차동엽',
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
    first_name: '프론트',
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
    first_name: '프론트',
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

export interface ITempRequestProps {}

const Request = (props: ITempRequestProps) => {
  return (
    <AppLayout>
      <StyledRequest>
        <Header mb="40px" title="부탁하기" />
        <Title mb="150px" fontWeight="700" fontSize="23px" lineHeight="33.25px">
          다용도실 청소를
          <br />
          누구에게 부탁할까요?
        </Title>
        <div className="request_swippr">
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
                <AvatarName first_name={member.first_name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button className="request_button" bgColor="#64ADF5" color="#ffffff">
          선택하기
        </Button>
      </StyledRequest>
    </AppLayout>
  );
};

export default Request;
