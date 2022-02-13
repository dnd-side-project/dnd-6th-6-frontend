import { StyledMessage } from './MessageStyled';

export type MessageType = 'success' | 'error' | 'basic';

export interface IAtomMessageProps {
  className?: MessageType;
  fontSize?: string;
}

const Message: React.FC<IAtomMessageProps> = (props) => {
  return (
    <StyledMessage {...props} className={props.className}>
      {props.children}
    </StyledMessage>
  );
};

export default Message;
