import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/templates/Login/Login';
import Join from './components/templates/Join/Join';
import ProfileSetting from './components/templates/ProfileSetting/ProfileSetting';
import Main from './components/templates/Main/Main';
import HouseMaking from './components/templates/HouseMaking/HouseMaking';
import Request from './components/templates/Request/Request';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
        <Route path="housemake" element={<HouseMaking />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </Router>
    // <>
    //   {/* <Login /> */}
    //   <Join />
    // </>
  );
}

export default App;
