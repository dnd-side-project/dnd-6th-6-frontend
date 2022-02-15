import styled, { css } from 'styled-components';

export const CategoryModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: rgba(32, 34, 36, 0.75);
`;

export const StyledChooseCatagoryModal = styled.div`
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 100%;
  height: 338px;
  padding: 28px 20px 39px 20px;
  background-color: #ffffff;
  border: 1px solid #e4ebf5;
  border-radius: 16px 16px 0px 0px;
  .chooseCategoryModal_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 29px;
    & > span {
      font-size: 13px;
      color: #989ca5;
    }
  }
  .chooseCategoryModal_swiper {
    margin-bottom: 37px;
    .swiper-slide {
      width: 139px;
      cursor: pointer;
    }
  }
`;

export const ChooseCategoryModalImgWrapper = styled.div<{ check: boolean }>`
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
