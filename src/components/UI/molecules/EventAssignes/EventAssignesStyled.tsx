import styled from 'styled-components';

export const StyledEventAssignes = styled.div<{ mb: string }>`
  margin-bottom: ${(props) => props.mb};
  .eventAssignes_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    span {
      color: #989ca5;
      font-size: 13px;
    }
  }
  .members_swiper {
    .swiper-slide {
      width: 62px;
    }
  }
  .eventAssignes_member {
    display: flex;
    flex-direction: column;
    align-items: center;
    .check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(91, 173, 255, 0.7);
    }
  }
`;
