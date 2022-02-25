import Alarm from '../../atoms/Alarm/Alarm';
import Avatar from '../../atoms/Avatar/Avatar';
import { ReactComponent as Logo } from '../../../../src_assets/logo.svg';
import { StyledMainHeader } from './MainHeaderStyled';
import { Member } from '../../../../interfaces/house';
import { INotification } from '../../../../interfaces/notification';
import { useNavigate, Link } from 'react-router-dom';

export interface IOrgMainHeaderPorps {
  mb?: string;
  houseMemberInfo: Member[];
  notifications?: INotification[];
}

const MainHeader = ({ mb, houseMemberInfo, notifications }: IOrgMainHeaderPorps) => {
  const navigate = useNavigate();
  //아바타 넘버는 나중에 컴포넌트 map돌릴때 키값 넣어주면 될듯?
  return (
    <StyledMainHeader mb={mb}>
      <Logo />
      <div className="innerflex">
        <div
          className="Avatarbox"
          onClick={() => {
            navigate('/userlist');
          }}
        >
          {houseMemberInfo.length > 3 ? (
            <>
              {/* <Avatar position="absolute" number={1} imgUrl={houseMemberInfo[0].member.user_profile.avatar} />
              <Avatar position="absolute" number={1} imgUrl={houseMemberInfo[1].member.user_profile.avatar} />
              <Avatar position="absolute" number={3} imgUrl={houseMemberInfo[2].member.user_profile.avatar} /> */}
              <Avatar position="absolute">{houseMemberInfo.length - 3}</Avatar>
            </>
          ) : (
            houseMemberInfo.map((e, index) => (
              <Avatar number={index + 1} position="absolute" key={index}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V21C24 17.01 16.005 15 12 15Z"
                    fill="#9BCFFF"
                  />
                </svg>
              </Avatar>
            ))
          )}
        </div>
        <Link to="/notification">
          {notifications ? (
            notifications.filter((notification) => notification.is_checked === false).length > 0 ? (
              <Alarm active={true} />
            ) : (
              <Alarm active={false} />
            )
          ) : (
            <Alarm active={false} />
          )}
        </Link>
      </div>
    </StyledMainHeader>
  );
};

export default MainHeader;
