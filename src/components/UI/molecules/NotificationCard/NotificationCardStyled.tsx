import styled from 'styled-components';

export const StyledNotificationCard = styled.div<{ mb: string }>`
  display: flex;
  width: 100%;
  .notification_info {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin: 0 36px 0 28px;
    margin-bottom: ${(props) => props.mb};
    .notification_tag {
      border: none;
      width: fit-content;
      font-size: 12px;
      color: #3f4245;
      height: 18px;
      padding: 3px 9px;
      border-radius: 40px;
      background-color: #ededed;
    }
    span {
      color: #61676d;
      font-size: 12px;
    }
  }
  .notification_time {
    color: #61676d;
    font-size: 10px;
  }
`;
