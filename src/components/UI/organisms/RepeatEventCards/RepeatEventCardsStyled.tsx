import styled from 'styled-components';

export const StyledRepeatEventCards = styled.div`
  background-color: #f8f9fd;
  padding: 24px 20px 27px;
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
