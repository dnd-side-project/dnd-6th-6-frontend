import styled from 'styled-components';

export const StyledCommentCard = styled.div`
  padding: 20px 20px 11px;
  border-bottom: 1px solid #ebf1f9;
  .commentCard_header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .commentCard_writer {
      flex: 1;
      display: flex;
      gap: 10px;
      align-items: center;
      span {
        font-weight: 500;
        color: #56585f;
      }
    }
    & > span {
      color: #898d93;
      font-size: 12px;
    }
  }
  & > p {
    line-height: 23.8px;
    color: #6f7479;
  }
`;
