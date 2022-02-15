import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar from '../../atoms/Avatar/Avatar';
import Label from '../../atoms/Label/Label';
import Title from '../../atoms/Title/Title';
import { StyledEventAssignes } from './EventAssignesStyled';

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

export interface IMember {
  id: number;
  username: string;
  first_name: string;
  profile: {
    house: string;
    gender: string;
    avatar: string;
    life_pattern: string;
    disposition: string;
    mbti: string;
    messsage: string;
  };
}

export interface IMoleEventAssignesProps {
  onClick: (member: IMember) => void;
  checkMembers: number[];
  mb?: string;
}

const EventAssignes = ({ onClick, checkMembers, mb }: IMoleEventAssignesProps) => {
  return (
    <StyledEventAssignes mb={mb || '0px'}>
      <div className="eventAssignes_header">
        <Title fontSize="17px" fontWeight="700">
          담당자를 선택해주세요!
        </Title>
        <span>{checkMembers.length}명 선택됨</span>
      </div>
      <div className="members_swiper">
        <Swiper slidesPerView={'auto'} className="mySwiper" spaceBetween={14}>
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="eventAssignes_member" onClick={() => onClick(member)}>
                <Avatar imgUrl="" mb="10px" width="62px" height="62px">
                  {checkMembers.includes(member.id) && (
                    <div className="check">
                      <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6L11 15L24 2" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </Avatar>
                <Label fontSize="13px" color="#888585">
                  {member.first_name}
                </Label>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledEventAssignes>
  );
};

export default EventAssignes;
