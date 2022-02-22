import styled from 'styled-components';

export const StyledFeedbackGiveForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  .feedbackgive_emoji {
    width: 178px;
    height: 169.04px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    align-items: center;
    border-radius: 8px;
    background-color: #f8f9fd;
    margin: 0 auto;
    margin-bottom: 38px;
    cursor: pointer;
    & > span {
      color: #c9cedc;
      font-size: 13px;
    }
  }
  .feedbackgive_simple {
    margin-bottom: 38px;
  }
  .feedbackgive_message {
    flex: 1;
    margin-bottom: 48px;
  }
  & > button {
    margin-bottom: 36px;
  }
`;
