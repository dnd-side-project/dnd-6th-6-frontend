import styled from 'styled-components';
import { IMolTextInputProps } from './TextInput';

export const StyledTextInput = styled.div<IMolTextInputProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${(props) => props.mb || 0};
`;
