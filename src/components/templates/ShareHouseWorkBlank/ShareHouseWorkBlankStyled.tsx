import styled from 'styled-components';

export const StyledShareHouseWorkBlank = styled.div`
  position: relative;
  .ShareHouseWorkBlank_header {
    line-height: 33px;
    margin-bottom: 39px;
    h5 {
      color: #808793;
      font-size: 15px;
    }
  }
  .ShareHouseWorkBlank_img {
    width: 100%;
    height: 275px;
    margin-bottom: 14px;
    display: flex;
    justify-content: center;
  }
  .ShareHouseWorkBlank_message {
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
  .ShareHouseWorkBlank_makeEventBtn {
    position: fixed;
    cursor: pointer;
    right: 20px;
    bottom: 87px;
  }
`;
