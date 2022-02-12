import styled from 'styled-components';

export const StyledRequest = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .swiper-slide {
    display: flex;
    button {
      align-self: center;
    }
  }
  .request_button {
    font-weight: 700;
    font-size: 16px;
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
`;
