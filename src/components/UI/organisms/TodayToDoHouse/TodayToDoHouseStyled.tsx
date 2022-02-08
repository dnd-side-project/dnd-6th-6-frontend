import styled from 'styled-components';

export const StyledTodayToDoHouse = styled.div`
  width: 100%;
  padding: 25px 20px;
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
    & > div {
      margin-bottom: 7px;
    }
  }
`;
