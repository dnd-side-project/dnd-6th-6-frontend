import styled from 'styled-components';

export const StyledRequestReceive = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .requestReceive_main {
    flex: 1;
  }
  .requestReceive_notice {
    color: #9ca3ab;
    font-size: 12px;
  }
  .requestReceive_button_wraaper {
    display: flex;
    gap: 12px;
    .requestReceive_button_reject {
      font-weight: 700;
      font-size: 16px;
    }
    .requestReceive_button_accept {
      font-weight: 700;
      font-size: 16px;
    }
  }
`;
