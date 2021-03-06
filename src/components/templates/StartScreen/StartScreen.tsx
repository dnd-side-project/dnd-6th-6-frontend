import { StyledStartScreen } from './StartScreenStyled';
import StartScreenSrc from '../../../src_assets/startScreen.svg';
import KakaoIcon from '../../../src_assets/kakao.svg';
import NaverIcon from '../../../src_assets/naver.svg';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import { useNavigate } from 'react-router';
import { KAKAO_AUTH_URL } from '../../../Oauth';

export interface ITempStartScreenProps {}

const StartScreen = (props: ITempStartScreenProps) => {
  const navigate = useNavigate();
  const onClickEmailBtn = () => {
    navigate('/login');
  };
  const onClickJoinBtn = () => {
    navigate('/join/email');
  };
  return (
    <StyledStartScreen bgUrl={StartScreenSrc}>
      <AppLayout>
        <div className="startScreen_socialIcon">
          <a href="http://localhost:8000/users/login/naver">
            <img src={NaverIcon} alt="naver" />
          </a>
          <a href={KAKAO_AUTH_URL}>
            <img src={KakaoIcon} alt="kakao" />
          </a>
        </div>
        <Button onClick={onClickEmailBtn} type="button" className="basic">
          이메일로 시작하기
        </Button>
        <div onClick={onClickJoinBtn} className="startScreen_join">
          회원가입
        </div>
      </AppLayout>
    </StyledStartScreen>
  );
};

export default StartScreen;
