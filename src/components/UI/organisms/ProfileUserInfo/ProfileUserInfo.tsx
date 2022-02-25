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
      <Avatar width="80px" height="80px" imgUrl={props.image} />
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
