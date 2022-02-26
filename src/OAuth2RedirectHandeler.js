import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const OAuth2RedirectHandler = (props) => {
  // 인가코드
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code');

  React.useEffect(async () => {
    console.log('여기 도니?');
    await axios
      .get(`http://ec2-13-125-38-145.ap-northeast-2.compute.amazonaws.com/users/login/kakao/callback?code=${code}`)
      .then((res) => {
        localStorage.setItem('Token', res.data.token);
        if (res.data.user.user_profile.house != null) {
          navigate('/main');
        } else {
          navigate('/houseNone');
        }
      });
  }, []);

  return <div>로딩중</div>;
};

export default OAuth2RedirectHandler;
