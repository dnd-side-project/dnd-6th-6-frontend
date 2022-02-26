import styled, { css } from 'styled-components';

export const StyledMyToDoCard = styled.div`
  width: 207px;
  height: 291px;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0.8px 4px 1.6px rgba(194, 201, 209, 0.2);
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  a {
    height: 100%;
  }
  a > .myToDoCard_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  a > .cardInfo {
    .subTitle {
      margin-top: 5px;
      /* font-size: 14px; */
      color: #9ca3ab;
    }
  }
`;

export const CardCategoryImgWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
`;

export const CardCategoryImg = styled.div<{ src: string }>`
  ${(props) => {
    const bgURL = `url("${props.src}")`;
    return css`
      width: 97px;
      height: 97px;
      background: ${bgURL};
      filter: drop-shadow(0px 4px 4px rgba(109, 104, 104, 0.25));
    `;
  }}
`;
