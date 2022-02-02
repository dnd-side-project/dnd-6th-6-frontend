import { Link } from 'react-router-dom';
import { StyledHeader } from './HeaderStyled';

export interface IMoleHeaderProps {
  to?: string;
  title: string;
}

const Header = (props: IMoleHeaderProps) => {
  return (
    <StyledHeader>
      {/* <Link to={`${props.to}`}> */}
      <a>
        <svg width="16" height="16" aria-hidden="true" focusable="false" role="img" viewBox="0 0 320 512">
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          ></path>
        </svg>
      </a>
      <h3>{props.title}</h3>
      {/* </Link> */}
    </StyledHeader>
  );
};
export default Header;
