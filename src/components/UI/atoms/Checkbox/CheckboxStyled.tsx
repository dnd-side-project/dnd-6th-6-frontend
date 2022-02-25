import styled from 'styled-components';

export const StyledCheckbox = styled.div<{ mb: string }>`
  position: relative;
  width: 100%;
  height: 52px;
  max-height: 52px;
  display: flex;
  align-items: center;
  border: 1px solid #e2edfe;
  background-color: #eff5fe;
  border-radius: 8px;
  margin-bottom: ${(props) => props.mb};
  display: flex;
  input[type='radio'] {
    position: absolute;
    visibility: hidden;
  }
  label {
    display: block;
    font-size: 14px;
    flex: 1;
    width: 100%;
    padding-top: 5px;
    margin-left: 50px;
    color: #a7adbd;
    cursor: pointer;
    transition: color 0.25s linear;
    -webkit-transition: color 0.25s linear;
  }
  .checkbox_check {
    display: block;
    position: absolute;
    border: 2px solid #bdc2d3;
    border-radius: 100%;
    width: 18px;
    height: 18px;
    left: 20px;
    top: 17px;
    z-index: 5;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;
  }
  .checkbox_check::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    width: 10px;
    height: 10px;
    left: 2px;
    top: 2px;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }
  input[type='radio']:checked ~ .checkbox_check {
    border: 2px solid #5badff;
  }
  input[type='radio']:checked ~ .checkbox_check::before {
    background: #5badff;
  }
  input[type='radio']:checked ~ label {
    color: #60636a;
  }
`;
