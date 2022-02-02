import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/templates/Login/Login';
import Join from './components/templates/Join/Join';
function App() {
  return (
    // <Router>
    //   <Routes>{/* <Route path="/" element={<Main />} /> */}</Routes>
    // </Router>
    <>
      <Login />
      <Join />
    </>
  );
}

export default App;
