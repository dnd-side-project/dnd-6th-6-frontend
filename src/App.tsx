import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/templates/Login/Login';
import Join from './components/templates/Join/Join';
import ProfileSetting from './components/templates/ProfileSetting/ProfileSetting';
import Main from './components/templates/Main/Main';
import HouseMaking from './components/templates/HouseMaking/HouseMaking';
import Request from './components/templates/Request/Request';
import RequestReceive from './components/templates/RequestReceive/RequestReceive';
import EmailAuth from './components/templates/EmailAuth/EmailAuth';
import JoinPassword from './components/templates/JoinPassword/JoinPassword';
import ShareHouseWork from './components/templates/ShareHouseWork/ShareHouseWork';
import EventMaking from './components/templates/EventMaking/EventMaking';
import NoticeDetail from './components/templates/NoticeDetail/NoticeDetail';
import NoticeWrite from './components/templates/NoticeWrite/NoticeWrite';
import StartScreen from './components/templates/StartScreen/StartScreen';
import Profile from './components/templates/Profile/Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/join">
          <Route path="email" element={<Join />} />
          <Route path="emailAuth" element={<EmailAuth />} />
          <Route path="password" element={<JoinPassword />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
        <Route path="housemake" element={<HouseMaking />} />
        <Route path="/request" element={<Request />} />
        <Route path="/requestReceive" element={<RequestReceive />} />
        <Route path="/shareHousework" element={<ShareHouseWork />} />
        <Route path="/eventmake" element={<EventMaking />} />
        <Route path="/notice">
          <Route path="detail" element={<NoticeDetail />} />
          <Route path="write" element={<NoticeWrite />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    // <>
    //   {/* <Login /> */}
    //   <Join />
    // </>
  );
}

export default App;
