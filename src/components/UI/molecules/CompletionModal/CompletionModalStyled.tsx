import styled from 'styled-components';

export const StyledCompletionModal = styled.div`
  position: fixed;
  top: 0;
  z-index: 10000;
  left: 0;
  background: rgba(32, 34, 36, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .completionModal {
    width: 311px;
    height: 172px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    .completionModal_title {
      color: #3f4245;
      padding: 52px 86px;
      text-align: center;
      border-bottom: 1px solid #eceef4;
      font-weight: 700;
      font-size: 17px;
    }
    .completionModal_button {
      flex: 1;
      border: none;
      background-color: inherit;
      display: flex;
      border-radius: 12px;

      .completionModal_cancel {
        flex: 1;
        height: 100%;
        color: #3f4245;
        border-right: 1px solid #eceef4;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
      }
      .completionModal_complete {
        flex: 1;
        height: 100%;
        color: #4992ff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
`;
