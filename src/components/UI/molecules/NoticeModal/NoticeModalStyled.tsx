import styled from 'styled-components';

export const NoticeModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: rgba(32, 34, 36, 0.75);
`;

export const StyledNoticeModal = styled.div`
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 100%;
  height: 212px;
  padding: 5px 0 55px 0;
  background-color: #ffffff;
  border: 1px solid #e4ebf5;
  border-radius: 16px 16px 0px 0px;
  & > div {
    display: flex;
    align-items: center;
    padding: 20px 15px;
    border-bottom: 1px solid #eaf2fe;
    cursor: pointer;
    svg {
      margin-right: 14px;
    }
    & > span {
      flex: 1;
      font-size: 16px;
      color: #3f4245;
    }
  }
  .noticeModal_edit {
    & > svg {
      margin-right: 16px;
    }
  }
  .noticeModal_delete {
    border: none;
  }
`;
