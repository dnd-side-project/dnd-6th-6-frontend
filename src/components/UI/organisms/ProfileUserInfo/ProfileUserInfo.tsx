import Avatar from '../../atoms/Avatar/Avatar';
import { StyledProfileUserInfo } from './ProfileUserInfoStyled';
import { User } from '../../../../interfaces/user';
import { House } from '../../../../interfaces/house';
import { useNavigate } from 'react-router-dom';

interface IProfileUserInfo {
  name?: string;
  email?: string;
  image?: string;
  house?: House;
}
const ProfileUserInfo = (props: IProfileUserInfo) => {
  const navigate = useNavigate();
  return (
    <StyledProfileUserInfo>
      <Avatar width="80px" height="80px" imgUrl={props.image}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V21C24 17.01 16.005 15 12 15Z"
            fill="#9BCFFF"
          />
        </svg>
      </Avatar>
      <div className="UserInfo">
        <div className="UserName">{props.name}</div>
        <div className="UserEmail">{props.email}</div>
        <div
          className="HouseName"
          onClick={() => {
            navigate('/userlist', { state: { name: props.house?.name, users: props.house?.members } });
          }}
        >
          {props.house?.name} &gt;
        </div>
      </div>
    </StyledProfileUserInfo>
  );
};

export default ProfileUserInfo;
