import styled from 'styled-components';

export const MyFeedCardStyled = styled.div`
  width: 184px;
  height: 240px;
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
  padding: 19px 16px 16px 16px;
  .elapsedtime {
    color: #80878e;
  }
  .feedtext {
    margin-top: 8px;
    line-height: 1.4;
    font-size: 16px;
    color: #74797e;
    font-weight: 500;
    span {
      color: #3f4245;
      font-weight: 700;
    }
  }
  .emojibox {
    display: flex;
    height: 112px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    border-bottom: solid 1px #f5f5f5;
  }
  .mywork {
    margin-top: 11px;
    height: 24px;
    display: flex;
    align-items: center;
    span {
      font-size: 12px;
      font-weight: 500;
      color: #74797e;
      margin-left: 7px;
    }
  }
`;
