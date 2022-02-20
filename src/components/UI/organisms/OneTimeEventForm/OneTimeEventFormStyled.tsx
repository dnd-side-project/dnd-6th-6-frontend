import styled from 'styled-components';

export const StyledOneTimeEventForm = styled.form`
  flex: 1;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  /* .event_category {
    width: 178px;
    height: 169.04px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    align-items: center;
    border-radius: 8px;
    background-color: #f8f9fd;
    margin: 0 auto;
    margin-bottom: 29px;
    cursor: pointer;
    & > span {
      color: #c9cedc;
      font-size: 13px;
    }
  } */
  .oneTimeEvent_info {
    flex: 1;
    .oneTimeEvent_calender {
      margin-bottom: 38px;
      .TimerInput {
        border: none;
        cursor: pointer;
        width: 100%;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #eff5fe;
        border: 1px solid #e2edfe;
        border-radius: 8px;
        padding: 0 20px;
        margin-bottom: 10px;
        .value {
          font-size: 14px;
          color: #abafbb;
        }
        .selectValue {
          font-size: 14px;
          font-weight: 500;
          color: #5b6574;
        }
      }
    }
  }
`;
