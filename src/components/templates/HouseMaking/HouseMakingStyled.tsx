import styled from 'styled-components';

export const StyledHouseMaking = styled.div`
  .Result {
    display: flex;
  }
  .ResultInner {
    display: flex;
    flex-direction: column;
  }
`;

export const ProgressiveBar = styled.div<{ page: number }>`
  height: 4px;
  background: #e3e4ea;
  border-radius: 2px;
  margin-bottom: 40px;
  .progressivebarInner {
    width: ${(props) => (props.page / 3) * 100}%;
    background: #5d9eff;
    height: 4px;
  }
`;

export const Step = styled.form`
  .StepHeader {
    color: #5d9eff;
    font-size: 17px;
    margin-bottom: 10px;
  }
  height: 479px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  .option {
    border: none;
    background-color: inherit;
  }
  .label {
    display: flex;
    justify-content: space-between;
  }
`;
