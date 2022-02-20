import styled from 'styled-components';

export const StyledEventMaking = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .eventMaking_selectBtn {
    display: flex;
    gap: 14px;
    margin-bottom: 36px;
    & > button {
      font-weight: 700;
    }
  }
`;
