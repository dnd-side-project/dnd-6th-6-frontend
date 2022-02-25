import styled from 'styled-components';

export const StyledMonthSelect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: rgba(32, 34, 36, 0.75);
  .monthSelect {
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 100%;
    height: 401px;
    padding: 28px 20px 39px 20px;
    background-color: #ffffff;
    border: 1px solid #e4ebf5;
    border-radius: 16px 16px 0px 0px;
  }
  .swiper {
    margin-bottom: 20px;
    height: 210px;
    overflow: hidden;
  }
  .swiper-wrapper {
    flex-direction: column;
    gap: 12px;
    height: fit-content;
    .swiper-slide {
      height: fit-content;
      .month {
        width: 100%;
        height: 52px;
        border: 1px solid #e2edfe;
        background-color: #eff5fe;
      }
    }
  }
`;

export const MonthBox = styled.div<{ isChecked: boolean }>`
  width: 100%;
  height: 52px;
  border: 1px solid #e2edfe;
  background-color: #eff5fe;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2edfe;
  border-radius: 8px;
  span {
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => (props.isChecked ? '#60636a' : '#a7adbd')};
    cursor: pointer;
    transition: color 0.25s linear;
    -webkit-transition: color 0.25s linear;
  }
`;
