import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/templates/Login/Login';
import Join from './components/templates/Join/Join';
import ProfileSetting from './components/templates/ProfileSetting/ProfileSetting';
import Main from './components/templates/Main/Main';
import HouseMaking from './components/templates/HouseMaking/HouseMaking';
import HouseNone from './components/templates/HouseNone/HouseNone';
import EmailAuth from './components/templates/EmailAuth/EmailAuth';
import JoinPassword from './components/templates/JoinPassword/JoinPassword';
import EventMaking from './components/templates/EventMaking/EventMaking';
import NoticeWrite from './components/templates/NoticeWrite/NoticeWrite';
import StartScreen from './components/templates/StartScreen/StartScreen';
import ProfilePage from './pages/ProfilePage';
import FeedbackGive from './components/templates/FeedbackGive/FeedbackGive';
import ShareHouseWorkPage from './pages/ShareHouseWorkPage';
import NoticeDetailPage from './pages/NoticeDatailPage';
import NotificationPage from './pages/NotificationPage';
import FeedbackAcceptPage from './pages/FeedbackAcceptPage';
import MainPage from './pages/MainPage';
import UserList from './components/templates/UserList/UserList';
import RequestReceivePage from './pages/RequestReceivePage';
import RequestPage from './pages/RequestPage';
import TodayToDoMeDetailPage from './pages/TodayToDoMeDetailPage';
import RepeatEventDetailPage from './pages/RepeatEventDetail';
import OneTimeEventDetail from './pages/OneTimeEventDetail';
import NoticeWritePage from './pages/NoticeWritePage';
import FeedbackGivePage from './pages/FeedbackGivePage';
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
        <Route path="/main" element={<MainPage />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
        <Route path="/houseNone" element={<HouseNone />} />
        <Route path="/housemake" element={<HouseMaking />} />
        <Route path="/feedback">
          <Route path=":feedbackId/chore/:choreId" element={<FeedbackAcceptPage />} />
          <Route path=":choreId/give" element={<FeedbackGivePage />} />
        </Route>
        <Route path="/request">
          <Route path=":choreId" element={<RequestPage />} />
          <Route path=":choreId/favor/:favorId" element={<RequestReceivePage />} />
        </Route>
        <Route path="/shareHousework" element={<ShareHouseWorkPage />} />
        <Route path="/event">
          <Route path="make" element={<EventMaking />} />
          <Route path="repeat/:choreId" element={<RepeatEventDetailPage />} />
          <Route path="onetime/:choreId" element={<OneTimeEventDetail />} />
          <Route path=":choreId/today" element={<TodayToDoMeDetailPage />} />
        </Route>
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/notice">
          <Route path="detail" element={<NoticeDetailPage />} />
          <Route path="write" element={<NoticeWritePage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
