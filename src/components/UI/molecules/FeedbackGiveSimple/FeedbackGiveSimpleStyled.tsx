import styled from 'styled-components';

export const StyledFeedbackGiveSimple = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FeedbackSimpleWrapper = styled.div<{ ischecked: boolean }>`
  cursor: pointer;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #eff5fe;
  border: 1px solid #e2edfe;
  border-radius: 8px;
  & > .feedbackSimple_check {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.ischecked ? '#5BADFF' : '#bfcee4')};
    margin-right: 10px;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }
  & > span {
    flex: 1;
    color: ${(props) => (props.ischecked ? '#565960' : '#a7adbd')};
    font-weight: ${(props) => (props.ischecked ? '500' : '400')};
    transition: color 0.25s linear;
    -webkit-transition: color 0.25s linear;
  }
`;
