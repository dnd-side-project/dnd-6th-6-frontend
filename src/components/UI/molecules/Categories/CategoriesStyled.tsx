import styled, { css } from 'styled-components';

export const StyledCategories = styled.div`
  width: 100%;
  .chooseCategoryModal_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 29px;
    & > span {
      font-size: 13px;
      color: #989ca5;
    }
  }

  .swiper-slide {
    width: 139px;
    cursor: pointer;
  }
`;

export const ChooseCategoryImgWrapper = styled.div<{ check: boolean }>`
  ${(props) => {
    const border = props.check ? `2px solid #5badff` : 'none';
    return css`
      width: 139px;
      height: 132px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5.3px;
      background: #f8f9fd;
      border: ${border};
      border-radius: 8px;
      img {
        width: 80.43px;
        height: 80.43px;
      }
      span {
        color: #b2b6bf;
        font-weight: 700;
        font-size: 13px;
      }
    `;
  }}
`;
