import AppLayout from '../../Layouts/Applayout';
import { StyledUserList, StyledUserListHeader } from './UserListStyled';
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from '../../UI/atoms/Avatar/Avatar';
import { User } from '../../../interfaces/user';
import { getLoginUser } from '../../../apis/user';
import { getMembersAPI } from '../../../apis/house';
import { useQuery } from 'react-query';
const UserList = () => {
  const navigate = useNavigate();
  const { data: me } = useQuery<User>('me', getLoginUser, {
    onError: () => {
      navigate('/');
    },
  });
  const { data: houseMemberInfo } = useQuery<User[]>('housemember', getMembersAPI, {
    enabled: !!me,
  });
  return (
    <AppLayout>
      <StyledUserList>
        <StyledUserListHeader>
          <span className="icon" onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.67 3.8701L9.9 2.1001L0 12.0001L9.9 21.9001L11.67 20.1301L3.54 12.0001L11.67 3.8701Z"
                fill="#3F4245"
              />
            </svg>
          </span>
          <div className="myhouse">내 하우스</div>
        </StyledUserListHeader>
        <div className="UserListBox">
          <div className="boxtitle">함께하는 룸메이트</div>
          <div className="box">
            <div className="innerbox">
              <Avatar imgUrl={me?.user_profile.avatar} />
              <div className="username">{me?.first_name}</div>
            </div>
            {houseMemberInfo?.map((e) => (
              <div className="innerbox" key={e.id}>
                <Avatar imgUrl={e.user_profile.avatar} />
                <div className="username">{e.first_name}님</div>
              </div>
            ))}
          </div>
        </div>
      </StyledUserList>
    </AppLayout>
  );
};

export default UserList;
