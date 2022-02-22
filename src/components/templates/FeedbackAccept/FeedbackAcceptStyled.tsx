import styled from 'styled-components';

export const StyledFeedbackAccept = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  & > header {
    padding: 20px;
  }
  .feedbackAccept_info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 22px 20px 36px;
    background-color: #f8f9fd;
    .feedbackAccept_header {
      margin-bottom: 16px;
      span {
        color: #80878e;
        line-height: 1.6;
      }
    }
    .feedbackAccept_card {
      flex: 1;
    }
  }
`;
