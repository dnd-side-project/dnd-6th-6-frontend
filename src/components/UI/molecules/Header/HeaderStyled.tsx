import styled, { css } from 'styled-components';

export const StyledHeader = styled.header<{ mb: string }>`
  ${(props) => {
    return css`
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: 17px;
      margin-bottom: ${props.mb};
      a {
        cursor: pointer;
      }
      h3 {
        color: #3f4245;
        font-size: 16px;
        font-weight: 400;
        flex: 1;
        margin-right: 24px;
      }
    `;
  }}
`;
