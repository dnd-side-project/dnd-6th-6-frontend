import Alarm from '../../atoms/Alarm/Alarm';
import Avatar from '../../atoms/Avatar/Avatar';
import { ReactComponent as Logo } from '../../../../src_assets/logo.svg';
import { StyledMainHeader } from './MainHeaderStyled';
import { Member } from '../../../../interfaces/house';
import { INotification } from '../../../../interfaces/notification';
import { Link } from 'react-router-dom';

export interface IOrgMainHeaderPorps {
  mb?: string;
  houseMemberInfo: Member[];
  notifications?: INotification[];
}

const MainHeader = ({ mb, houseMemberInfo, notifications }: IOrgMainHeaderPorps) => {
  //아바타 넘버는 나중에 컴포넌트 map돌릴때 키값 넣어주면 될듯?
  return (
    <StyledMainHeader mb={mb}>
      <Logo />
      <div className="innerflex">
        <div className="Avatarbox">
          {houseMemberInfo.length > 3 ? (
            <>
              {/* <Avatar position="absolute" imgUrl={houseMemberInfo[0].member.user_profile.avatar} />
              <Avatar position="absolute" imgUrl={houseMemberInfo[1].member.user_profile.avatar} />
              <Avatar position="absolute" imgUrl={houseMemberInfo[2].member.user_profile.avatar} /> */}
              <Avatar position="absolute">{houseMemberInfo.length - 3}</Avatar>
            </>
          ) : (
            houseMemberInfo.map((e, index) => <Avatar position="absolute" key={index} />)
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
