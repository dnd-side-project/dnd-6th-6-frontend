import styled from 'styled-components';

export const StyledRequest = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .swiper-slide {
    display: flex;
    width: fit-content;
    cursor: pointer;
    button {
      align-self: center;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .request_main {
    flex: 1;
  }
  .request_notice {
    color: #9ca3ab;
    font-size: 12px;
  }
  .request_button {
    font-weight: 700;
    font-size: 16px;
  }
`;
