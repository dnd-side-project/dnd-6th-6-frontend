import Alarm from '../../atoms/Alarm/Alarm';
import Avatar from '../../atoms/Avatar/Avatar';
import { ReactComponent as Logo } from '../../../../src_assets/logo.svg';
import { StyledMainHeader } from './MainHeaderStyled';
import { Link } from 'react-router-dom';

export interface IOrgMainHeaderPorps {
  mb?: string;
}

const MainHeader = (props: IOrgMainHeaderPorps) => {
  //아바타 넘버는 나중에 컴포넌트 map돌릴때 키값 넣어주면 될듯?

  return (
    <StyledMainHeader mb={props.mb}>
      <Logo />
      <div className="innerflex">
        <div className="Avatarbox">
          <Avatar position="absolute" number={1} />
          <Avatar position="absolute" number={2} />
          <Avatar position="absolute" number={3} />
        </div>
        <Link to="/notification">
          <Alarm active={false} />
        </Link>
      </div>
    </StyledMainHeader>
  );
};

export default MainHeader;
