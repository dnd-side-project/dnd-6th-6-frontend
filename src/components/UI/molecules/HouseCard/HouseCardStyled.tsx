import styled from 'styled-components';

export const StyledHouseCard = styled.div`
  width: 100%;
  height: 86px;
  padding: 20px 16px;
  background: #ffffff;
  box-shadow: 0px 1px 5px 2px rgba(194, 201, 209, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .houseCard_info {
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .complete_or_not {
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
        font-weight: 400;
        font-size: 12px;
        color: #9ca3ab;
      }
    }
  }
`;
