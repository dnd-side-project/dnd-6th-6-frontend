import { Link } from 'react-router-dom';
import { StyledHeader } from './HeaderStyled';

export interface IMoleHeaderProps {
  to?: string;
  title: string;
  onClick?: () => void;
  mb?: string;
}

const Header = (props: IMoleHeaderProps) => {
  return (
    <StyledHeader mb={props.mb || '0px'}>
      {/* <Link to={`${props.to}`}> */}
      <a onClick={props.onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.67 3.8701L9.9 2.1001L0 12.0001L9.9 21.9001L11.67 20.1301L3.54 12.0001L11.67 3.8701Z"
            fill="#3F4245"
          />
        </svg>
      </a>
      <h3>{props.title}</h3>
      <div></div>
      {/* </Link> */}
    </StyledHeader>
  );
};
export default Header;
