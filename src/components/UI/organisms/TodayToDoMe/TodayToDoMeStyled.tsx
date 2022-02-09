import styled from 'styled-components';

export const StyledTodayToDoMe = styled.div<{ mb?: string }>`
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  padding: 25px 0px;
  margin-bottom: ${(props) => props.mb};
  .todayToDoMe_header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    & > div {
      flex: 1;
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
        font-weight: 700;
        font-size: 16px;
        color: #5d9eff;
      }
    }
    & > span {
      color: #a3a8ae;
    }
  }
  .swiper {
    &:first-child {
      padding-left: 20px;
    }
  }

  .swiper-slide {
    display: flex;
    button {
      align-self: center;
    }
  }
`;
