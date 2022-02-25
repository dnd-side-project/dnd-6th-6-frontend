import styled from 'styled-components';

export const StyledTodayToDoMeDetail = styled.div`
  .todayToDoMeDatail_image {
    width: 100%;
    height: auto;
    box-shadow: inset -2px 2px 20px rgba(8, 36, 92, 0.08);
    border-radius: 9px;
    margin-bottom: 8px;
  }
  .todayToDoMeDatail_info {
    & > div {
      padding: 16px 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eff4fe;
      h5 {
        color: #3f4245;
        font-weight: 500;
        font-size: 16px;
        flex: 1;
      }
    }
    & > div:last-child {
      border: none;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    color: #61676d;
    font-weight: 500;
  }
`;

export const TodayToDoMeDatailImage = styled.div<{ bgUrl: string }>``;
