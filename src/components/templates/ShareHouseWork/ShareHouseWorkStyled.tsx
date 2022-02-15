import styled from 'styled-components';

export const StyledShareHouseWork = styled.div`
  position: relative;
  .shareHouseWork_header {
    line-height: 33px;
    margin-bottom: 39px;
    h5 {
      color: #808793;
      font-size: 15px;
    }
  }
  .shareHouseWork_img {
    width: 100%;
    height: 275px;
    margin-bottom: 14px;
  }
  .shareHouseWork_message {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 28.56px;
    span:first-child {
      font-weight: 700;
      font-size: 17px;
    }
    span:last-child {
      font-size: 15px;
      color: #61676d;
    }
  }
  .shareHouseWork_makeEventBtn {
    position: fixed;
    cursor: pointer;
    right: 20px;
    bottom: 87px;
  }
`;
