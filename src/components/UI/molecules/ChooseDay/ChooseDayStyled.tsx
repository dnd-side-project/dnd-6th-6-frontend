import styled, { css } from 'styled-components';

export const StyledChooseDay = styled.div`
  width: 100%;
  .swiper {
    width: 100%;
    .swiper-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .swiper-slide {
    width: 43px;
    cursor: pointer;
  }
`;

export const DayWrapper = styled.div<{ isChoose: boolean }>`
  ${(props) => {
    const background = props.isChoose ? `#5badff` : '#ffffff';
    const color = props.isChoose ? `#FFFFFF` : `#a7adbd`;
    const fontWeight = props.isChoose ? `700` : `500`;
    return css`
      width: 43px;
      height: 43px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* gap: 20px; */
      background: ${background};
      border-radius: 50%;
      span {
        color: ${color};
        font-weight: ${fontWeight};
        font-size: 15px;
      }
    `;
  }}
`;
