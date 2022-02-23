import styled from 'styled-components';

export const StyledRepeatEventCard = styled.div`
  width: 207px;
  height: 240px;
  padding: 18px 16px 16px;
  background: #ffffff;
  box-shadow: 0px 0.8px 4px 1.6px rgba(194, 201, 209, 0.2);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  .repeatChore_time {
    color: #9ca3ab;
    display: block;
    font-weight: 500;
    margin-bottom: 24px;
  }
  .repeatChore_category {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 23px;
  }
  .repeatChore_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .repeatChore_avatar {
      position: relative;
      left: -18px;
      height: 25.27px;
    }
    span {
      color: #565960;
    }
  }
`;
