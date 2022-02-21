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
    }
  }
`;
