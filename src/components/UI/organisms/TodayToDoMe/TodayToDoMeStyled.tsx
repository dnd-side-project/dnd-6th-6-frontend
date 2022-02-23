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
    .swiper-wrapper {
      .swiper-slide {
        width: fit-content;
        display: flex;
        button {
          align-self: center;
        }
      }
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
    .todayToDo_blank_image {
      margin: 130px 0 45px;
    }
    & > span {
      color: #9ca3ab;
      font-weight: 500;
    }
  }
`;
