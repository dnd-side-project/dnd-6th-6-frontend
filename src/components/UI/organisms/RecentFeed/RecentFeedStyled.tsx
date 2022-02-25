import styled from 'styled-components';

export const StyledRecentFeed = styled.div`
  .mySwiper {
    margin-top: 16px;
  }
  .RecentFeedHeader {
    display: flex;
    justify-content: space-between;
    .RecentFeedTitle {
      font-weight: 700;
      font-size: 17px;
    }
    .more_info {
      font-weight: 400;
      font-size: 14px;
      color: #80878e;
    }
  }
  .todayToDo_blank {
    width: 207px;
    height: 291px;
    border-radius: 6px;
    background: #ffffff;
    box-shadow: 0px 0.8px 4px 1.6px rgba(194, 201, 209, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > span {
      color: #9ca3ab;
      font-weight: 500;
    }
  }
`;
