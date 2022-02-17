import styled, { css } from 'styled-components';

export const StyledStartScreen = styled.div<{ bgUrl: string }>`
  ${(props) => {
    const backgroundImg = `no-repeat center center /100% url("${props.bgUrl}")`;
    return css`
      width: 100%;
      height: 100vh;
      background: ${backgroundImg};
      background-attachment: fixed;
      background-size: cover;
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        .startScreen_socialIcon {
          margin-bottom: 24px;
          display: flex;
          gap: 32px;
        }
        .startScreen_join {
          width: 100%;
          margin-top: 16px;
          text-align: center;
          cursor: pointer;
        }
      }
    `;
  }}
`;
