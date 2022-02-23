import styled from 'styled-components';

export const StyledEventDetailHeader = styled.div`
  & > .tag {
    margin-bottom: 4px;
  }
  .eventDetail_time {
    margin-bottom: 36px;
    h6 {
      color: #3f4245;
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 9px;
    }
    span {
      color: #626262;
    }
  }
  .eventDetail_assignees {
    display: flex;
    flex-direction: column;
    h6 {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: #3f4245;
      font-size: 17px;
      font-weight: 700;
      span:last-child {
        color: #626262;
        font-weight: 400;
        font-size: 15px;
      }
    }
    .eventDetail_assignee {
      display: flex;
      gap: 14px;
    }
  }
`;
