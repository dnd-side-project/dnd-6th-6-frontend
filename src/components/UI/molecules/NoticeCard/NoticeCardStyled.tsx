import styled from 'styled-components';

export const StledNoticeCard = styled.div`
  border-bottom: 1px solid #eaf2fe;
  margin-top: 22px;
  .noticeCard_header {
    padding: 0 20px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .noticeCard_header_Info {
      display: flex;
      align-items: center;
      gap: 6px;
      h3 {
        font-weight: 700;
        font-size: 14px;
      }
      .noticeCard_time {
        font-size: 12px;
        color: #9ca3ab;
      }
    }
    & > svg {
      cursor: pointer;
    }
  }
  .noticeCard_content {
    padding: 0 20px 20px;
    font-size: 14px;
    line-height: 23.8px;
    color: #697775;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;
