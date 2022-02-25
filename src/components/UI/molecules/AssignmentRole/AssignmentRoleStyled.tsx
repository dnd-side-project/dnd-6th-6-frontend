import styled from 'styled-components';

export const StyledAssignmentRole = styled.div<{ mb: string; chooseRole: string }>`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #eff5fe;
  cursor: pointer;
  margin-bottom: ${(props) => props.mb};
  border: 1px solid #e2edfe;
  border-radius: 8px;
  & > span {
    color: ${(props) => (props.chooseRole !== '' ? '#a7adbd' : '#5B6574')};
    font-size: 14px;
    font-weight: ${(props) => (props.chooseRole ? '500' : '400')};
  }
`;

export const StyledAssignmentRoleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: rgba(32, 34, 36, 0.75);
  .assignmentRole_modal {
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 100%;
    height: 381px;
    padding: 28px 20px 39px 20px;
    background-color: #ffffff;
    border: 1px solid #e4ebf5;
    border-radius: 16px 16px 0px 0px;
    .assignmentRole_role {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 41px;
    }
  }
`;
