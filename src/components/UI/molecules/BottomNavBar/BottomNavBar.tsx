import { Link, useLocation } from 'react-router-dom';
import { StyledBottomNavBar, StyledSpan } from './BottomNavBarStyled';

const BottomNavBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <StyledBottomNavBar>
        <Link to="/main">
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21H18C18.5523 21 19 20.5523 19 20V13.832C19 13.3725 19.3725 13 19.832 13C20.5944 13 20.9552 12.0597 20.3885 11.5497L12.669 4.60207C12.2887 4.25979 11.7113 4.25979 11.331 4.60207L3.6115 11.5497C3.04475 12.0597 3.40557 13 4.16804 13C4.62752 13 5 13.3725 5 13.832V20C5 20.5523 5.44772 21 6 21H9Z"
                fill={location.pathname === '/main' ? 'black' : '#E0E5EC'}
              />
            </svg>
            {location.pathname === '/main' ? (
              <StyledSpan color="#3F4245">하우스</StyledSpan>
            ) : (
              <StyledSpan color="#D5DCE4">하우스</StyledSpan>
            )}
          </li>
        </Link>
        <Link to="/shareHousework">
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.4 4.63636C17.9582 4.63636 17.6 4.27819 17.6 3.83636V3.8C17.6 3.35817 17.2418 3 16.8 3C16.3582 3 16 3.35817 16 3.8V3.81818C16 4.27005 15.6337 4.63636 15.1818 4.63636H8.81818C8.36631 4.63636 8 4.27005 8 3.81818V3.8C8 3.35817 7.64183 3 7.2 3C6.75817 3 6.4 3.35817 6.4 3.8V3.83636C6.4 4.27819 6.04183 4.63636 5.6 4.63636C4.72 4.63636 4 5.37273 4 6.27273V19.3636C4 20.2636 4.72 21 5.6 21H18.4C19.28 21 20 20.2636 20 19.3636V6.27273C20 5.37273 19.28 4.63636 18.4 4.63636ZM18.4 18.3636C18.4 18.9159 17.9523 19.3636 17.4 19.3636H6.6C6.04772 19.3636 5.6 18.9159 5.6 18.3636V9.72727C5.6 9.17499 6.04772 8.72727 6.6 8.72727H17.4C17.9523 8.72727 18.4 9.17499 18.4 9.72727V18.3636Z"
                fill={location.pathname === '/shareHousework' ? 'black' : '#E0E5EC'}
              />
            </svg>
            {location.pathname === '/shareHousework' ? (
              <StyledSpan color="#3F4245">가사 분담</StyledSpan>
            ) : (
              <StyledSpan color="#D5DCE4">가사 분담</StyledSpan>
            )}
          </li>
        </Link>
        <Link to="/compliment">
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                fill={location.pathname === '/compliment' ? 'black' : '#E0E5EC'}
              />
            </svg>
            {location.pathname === '/compliment' ? (
              <StyledSpan color="#3F4245">칭찬 게시판</StyledSpan>
            ) : (
              <StyledSpan color="#D5DCE4">칭찬 게시판</StyledSpan>
            )}
          </li>
        </Link>
        <Link to="/profile">
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 12C14.4862 12 16.5 9.98625 16.5 7.5C16.5 5.01375 14.4862 3 12 3C9.51375 3 7.5 5.01375 7.5 7.5C7.5 9.98625 9.51375 12 12 12ZM12 14.25C8.99625 14.25 3 15.7575 3 18.75V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V18.75C21 15.7575 15.0037 14.25 12 14.25Z"
                fill={location.pathname === '/profile' ? 'black' : '#E0E5EC'}
              />
            </svg>
            {location.pathname === '/profile' ? (
              <StyledSpan color="#3F4245">내 정보</StyledSpan>
            ) : (
              <StyledSpan color="#D5DCE4">내 정보</StyledSpan>
            )}
          </li>
        </Link>
      </StyledBottomNavBar>
    </>
  );
};

export default BottomNavBar;
