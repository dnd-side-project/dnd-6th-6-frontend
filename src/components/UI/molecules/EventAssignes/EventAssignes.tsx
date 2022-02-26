import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getMembersAPI } from '../../../../apis/house';
import { user1, user2, user3 } from '../../../../dummyData/dummyUser';
import { Chore } from '../../../../interfaces/chore';
import { User } from '../../../../interfaces/user';
import Avatar from '../../atoms/Avatar/Avatar';
import Label from '../../atoms/Label/Label';
import Title from '../../atoms/Title/Title';
import { StyledEventAssignes } from './EventAssignesStyled';

//하우스 구성원 목록 Dummy Data
const members = [user1, user2, user3];

export interface IMoleEventAssignesProps {
  onClick: (member: User) => void;
  checkMembers: User[];
  mb?: string;
  me: User;
}

const EventAssignes: React.FC<IMoleEventAssignesProps> = ({ me, children, onClick, checkMembers, mb }) => {
  const { data: members } = useQuery<User[]>('members', getMembersAPI);
  if (!members) {
    return <div>로딩중</div>;
  }
  return (
    <StyledEventAssignes mb={mb || '0px'}>
      <div className="eventAssignes_header">
        <Title fontSize="17px" fontWeight="700" color="#3F4245">
          담당자를 선택해주세요!
        </Title>
        <span>{checkMembers.length}명 선택됨</span>
      </div>
      {children}
      <div className="members_swiper">
        <Swiper slidesPerView={'auto'} className="mySwiper" spaceBetween={14}>
          {[...members, me].map((member) => (
            <SwiperSlide key={member.id}>
              <div className="eventAssignes_member" onClick={() => onClick(member)}>
                <Avatar imgUrl={member.user_profile.avatar} mb="10px" width="62px" height="62px">
                  {checkMembers.includes(member) ? (
                    <div className="check">
                      <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6L11 15L24 2" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V21C24 17.01 16.005 15 12 15Z"
                        fill="#9BCFFF"
                      />
                    </svg>
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
