import styled from 'styled-components';

export const StyledMainHeader = styled.div<{ mb?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.mb};
  .innerflex {
    display: flex;
    width: 120px;
    justify-content: space-between;
  }
  .Avatarbox {
    position: relative;
  }
`;
