import Alarm from '../../atoms/Alarm/Alarm';
import Avatar from '../../atoms/Avatar/Avatar';
import { ReactComponent as Logo } from '../../../../src_assets/logo.svg';
import { StyledMainHeader } from './MainHeaderStyled';

const MainHeader = () => {
  //아바타 넘버는 나중에 컴포넌트 map돌릴때 키값 넣어주면 될듯?
  return (
    <StyledMainHeader>
      <Logo />
      <div className="innerflex">
        <div className="Avatarbox">
          <Avatar number={1} />
          <Avatar number={2} />
          <Avatar number={3} />
        </div>
        <Alarm active={false} />
      </div>
    </StyledMainHeader>
  );
};

export default MainHeader;
