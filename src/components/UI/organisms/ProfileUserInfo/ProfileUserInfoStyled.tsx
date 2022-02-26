import styled from 'styled-components';

export const StyledProfileUserInfo = styled.div`
  display: flex;
  margin-bottom: 40px;
  .UserInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 16px;
    .UserName {
      font-weight: 700;
      font-size: 18px;
    }
    .UserEmail {
      font-weight: 400;
      color: #696e73;
      font-size: 14px;
    }
    .HouseName {
      cursor: pointer;
    }
  }
`;
