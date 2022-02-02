import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${(props) => {
    return css`
      width: ${props.width || '100%'};
      padding: 5px;
      &:focus {
        outline: none;
      }
    `;
  }}
`;
