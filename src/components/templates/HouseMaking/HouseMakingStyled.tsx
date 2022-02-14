import styled from 'styled-components';

export const StyledHouseMaking = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  .Result {
    margin-top: 30px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .Board {
    padding: 10px;
    width: 100%;
    height: 94px;
    display: flex;
    border-radius: 8px;
    background-color: #eff5fe;
  }
  #left {
    border-right: 1px solid #dadde4;
  }
  .BoardInner {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 30px;
  }
  .BoardHeader {
    font-size: 14px;
  }
  .BoardValue {
    font-size: 18px;
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
    border-radius: 2px;
  }
`;

export const StyledForm = styled.form`
  .StepHeader {
    color: #5d9eff;
    font-size: 17px;
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  flex: 1;
  .option {
    border: none;
    background-color: inherit;
    margin-bottom: 5px;
  }
  .label {
    display: flex;
    justify-content: space-between;
  }
  .skip {
    color: #7a7f84;
    font-size: 14px;
    text-align: center;
    padding: 10px;
  }
`;

export const TextInputWrapper = styled.div`
  flex: 1;
`;
