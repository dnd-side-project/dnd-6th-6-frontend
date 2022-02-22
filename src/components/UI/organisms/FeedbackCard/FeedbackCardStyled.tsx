import styled from 'styled-components';

export const StyledFeedbackCard = styled.div`
  padding: 0 24px;
  background: #ffffff;
  box-shadow: 0px 0.8px 4px 1.6px rgba(194, 201, 209, 0.2);
  border-radius: 6px;
  .feedbackCard_header {
    display: flex;
    padding: 23px 0;
    border-bottom: 1px solid #f5f5f5;
    .feedbackCard_category {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 12px;
      img {
        width: 23px;
        height: 23px;
      }
      span {
        font-weight: 500;
        color: #565960;
      }
    }
    .feedbackCard_completeTime {
      font-size: 12px;
      color: #80878e;
    }
  }
  .feedbackCard_emoji {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px 0 16px;
  }
  .feedbackCard_from {
    padding-bottom: 24px;
    .from_avatar {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 11px;
      span {
        color: #3f4245;
      }
    }
    p {
      color: #565960;
      line-height: 1.6;
      margin-bottom: 15px;
    }
    .from_simpleMessages {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;

      .from_simpleMessage {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        background: #eff5fe;
        border: 1px solid #e2edfe;
        border-radius: 8px;
        color: #565960;
        font-weight: 500;
      }
    }
  }
`;
