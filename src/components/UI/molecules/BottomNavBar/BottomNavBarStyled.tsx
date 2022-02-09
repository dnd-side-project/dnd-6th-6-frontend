import styled from 'styled-components';

export const StyledBottomNavBar = styled.ul`
  position: fixed;
  bottom: 0;
  padding: 25px 50px;
  z-index: 10000;
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-top: 2px;
      font-size: 10px;
    }
  }
`;

export const StyledSpan = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;
