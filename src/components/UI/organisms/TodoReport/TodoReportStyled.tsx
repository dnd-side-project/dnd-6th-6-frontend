import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledTodoReport = styled.div`
  margin-top: 6px;
  padding: 36px 20px;
  background-color: #f8f9fd;
  .TodoReportHeader {
    display: flex;
    justify-content: space-between;
    .TodoReportTitle {
      font-weight: 700;
      font-size: 17px;
    }
    .more_info {
      font-weight: 400;
      font-size: 14px;
      color: #80878e;
    }
  }
  .mySwiper {
    margin-top: 21px;
  }
  .TypeCounter {
    margin-top: 30px;
    font-weight: 500;
    font-size: 14px;
    .Count {
      font-weight: 700;
      color: #5badff;
      margin-left: 8px;
    }
  }
  .PercentBar {
    display: flex;
    margin-top: 16px;
    height: 16px;
    width: 100%;
    border-radius: 10px;
  }
  .ReportBox {
    margin-top: 28px;
    max-height: 234px;
    overflow-y: scroll;
    .todoname {
      margin-left: 10px;
      font-weight: 500;
      color: #3f4245;
    }
    .todotime {
      color: #696e73;
    }
  }
`;

export const StyledCalendar = styled.div`
  .react-datepicker__day--in-range {
    border-radius: 100% !important;
    background-color: #53a5f8 !important;
    color: white !important;
  }
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range) {
    border-radius: 100% !important;
    background-color: #53a5f8 !important;
    color: white !important;
  }
  .react-datepicker__input-container > input {
    height: 20px;
    border: none;
    background-color: inherit;
    font-size: 14px;
    color: #80878e;
  }
`;

export const PercentBarInner = styled.div<{ percentage: number; bgColor: string; line: number }>`
  width: calc(${(props) => props.percentage}*100%);
  background-color: ${(props) => props.bgColor};
  height: 16px;
  border-right: solid 1px white;
  ${(props) => {
    return props.line == 0 ? `border-top-left-radius:10px; border-bottom-left-radius:10px;` : null;
  }}
`;
export const ReportBoxItem = styled.div`
  height: 43px;
  width: 100%;
  border-bottom: solid 1px #e4e6ec;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
