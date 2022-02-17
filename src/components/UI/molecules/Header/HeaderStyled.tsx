import styled, { css } from 'styled-components';

export const StyledHeader = styled.header<{ mb: string; itemCount?: number }>`
  ${(props) => {
    const textAlign = props.itemCount === 3 ? 'left' : 'center';
    return css`
      width: 100%;
      display: flex;
      align-items: center;
      text-align: ${textAlign};
      font-weight: bold;
      font-size: 17px;
      justify-content: space-between;
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
      a.three {
        width: 33%;
      }
      h3.three {
        width: 33%;
        display: flex;
        margin-right: 0;
        justify-content: center;
      }
      div.three {
        width: 33%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 16px;
        color: #9ca3ab;
      }
    `;
  }}
`;
