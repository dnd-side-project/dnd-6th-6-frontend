import styled from 'styled-components';

export const StyledUserList = styled.div`
  .UserListBox {
    margin-top: 32px;
    strong {
      color: #5badff;
    }
    .boxtitle {
      font-size: 17px;
      font-weight: 700;
    }
    .box {
      margin-top: 24px;
      .innerbox {
        display: flex;
        height: 64px;
        align-items: center;
        border-bottom: solid 1px #f0f2f8;
        .username {
          font-size: 21px;
          font-weight: 500;
          margin-left: 15px;
        }
      }
    }
  }
`;

export const StyledUserListHeader = styled.div`
  width: 100%;
  height: 54px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  .myhouse {
    flex: 1;
    text-align: center;
    padding-right: 10%;
  }
`;
