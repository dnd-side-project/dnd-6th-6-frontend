import { StyledMessage } from './MessageStyled';

type MessageType = 'success' | 'error';

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
