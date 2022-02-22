import styled from 'styled-components';

export const StyledComments = styled.div`
  .comments_length {
    padding: 16px 20px 0;
    display: flex;
    align-items: center;
    gap: 12px;
    span:first-child {
      font-size: 17px;
      font-weight: 700;
      color: #3f4245;
    }
    span:last-child {
      font-size: 15px;
      color: #626262;
    }
  }
  .comments {
    div:last-child {
      border-bottom: none;
    }
  }
`;
