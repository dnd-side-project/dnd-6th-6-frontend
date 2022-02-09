import styled from 'styled-components';

export const StyledNotice = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  background-color: #eceef4;
  .notice_title {
    padding-right: 16px;
    border-right: 1px solid rgba(107, 113, 123, 0.2);
    margin-right: 16px;
  }
  p {
    font-size: 12px;
    color: #6b717b;
    flex: 1;
  }
  .arrow {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
  }
`;
