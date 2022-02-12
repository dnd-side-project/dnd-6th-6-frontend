import styled, { css } from 'styled-components';

export const StyledSpeechBubble = styled.div<{ request: boolean }>`
  margin: 0 auto;
  width: 297px;
  min-height: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  position: relative;
  .request_message {
    background-color: #eff5fe;
    border-radius: 12px;
    height: 100%;
    overflow: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    span:first-child {
      color: #9ca3ab;
      font-size: 12px;
      margin-bottom: 8px;
    }
    span:last-child {
      font-size: 14px;
      color: #4e5255;
      line-height: 22.4px;
    }
  }
  ${(props) => {
    return css`
      ${props.request
        ? `svg {
    position: absolute;
    right: 18px;
    z-index: -1;
    bottom: -14px;
  }`
        : `svg {
    position: absolute;
    left: 18px;
    z-index: -1;
    bottom: -14px;
  }`}
    `;
  }}
`;
