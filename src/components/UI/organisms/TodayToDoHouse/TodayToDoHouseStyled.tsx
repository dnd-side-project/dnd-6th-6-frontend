import styled from 'styled-components';

export const StyledTodayToDoHouse = styled.div`
  width: 100%;
  padding: 25px 20px;
  background-color: ${(props) => props.theme.bgColor};
  .TodayToDoHouse_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    span {
      color: #a3a8ae;
    }
  }
  .TodayToDoHouse_info {
    & > a > div {
      margin-bottom: 7px;
    }
    .TodayToDoHouse_noToDo {
      margin: 75px 0;
      text-align: center;
      color: #80878e;
      font-size: 17px;
      font-weight: 700;
      line-height: 25.5px;
    }
  }
`;
