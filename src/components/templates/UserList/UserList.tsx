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
              <Avatar imgUrl={me?.user_profile.avatar}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.9999 10.9999C14.0135 10.9999 16.4545 8.559 16.4545 5.54537C16.4545 2.53173 14.0135 0.0908203 10.9999 0.0908203C7.98628 0.0908203 5.54537 2.53173 5.54537 5.54537C5.54537 8.559 7.98628 10.9999 10.9999 10.9999ZM10.9999 13.7272C7.359 13.7272 0.0908203 15.5545 0.0908203 19.1817V20.909C0.0908203 21.4613 0.538536 21.909 1.09082 21.909H20.909C21.4613 21.909 21.909 21.4613 21.909 20.909V19.1817C21.909 15.5545 14.6408 13.7272 10.9999 13.7272Z"
                    fill="#9BCFFF"
                  />
                </svg>
              </Avatar>
              <div className="username">{me?.first_name}</div>
            </div>
            {houseMemberInfo?.map((e) => (
              <div className="innerbox" key={e.id}>
                <Avatar imgUrl={e.user_profile.avatar}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.9999 10.9999C14.0135 10.9999 16.4545 8.559 16.4545 5.54537C16.4545 2.53173 14.0135 0.0908203 10.9999 0.0908203C7.98628 0.0908203 5.54537 2.53173 5.54537 5.54537C5.54537 8.559 7.98628 10.9999 10.9999 10.9999ZM10.9999 13.7272C7.359 13.7272 0.0908203 15.5545 0.0908203 19.1817V20.909C0.0908203 21.4613 0.538536 21.909 1.09082 21.909H20.909C21.4613 21.909 21.909 21.4613 21.909 20.909V19.1817C21.909 15.5545 14.6408 13.7272 10.9999 13.7272Z"
                      fill="#9BCFFF"
                    />
                  </svg>
                </Avatar>
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
