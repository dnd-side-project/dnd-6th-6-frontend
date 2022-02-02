import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  ${(props) => {
    return css`
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      height: 70px;
      padding: 20px;
      a {
        cursor: pointer;
      }
      h3 {
        flex: 1;
        color: ${props.theme.textColor};
      }
    `;
  }}
`;
