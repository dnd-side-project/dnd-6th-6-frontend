import Textarea from '../../atoms/Textarea/Textarea';
import { StyledSpeechBubble } from './SpeechBubbleStyled';

export interface IMoleSpeechBubbleProps {
  request: boolean;
  first_name?: string;
  response_message?: string;
}

const SpeechBubble = ({ request, first_name, response_message }: IMoleSpeechBubbleProps) => {
  return (
    <StyledSpeechBubble request={request}>
      {request ? (
        <>
          <Textarea bgColor="#EFF5FE" placeholder="메세지를 작성해주세요." />
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 16.5V0.5H0L16 16.5Z" fill="#E5EFFE" />
          </svg>
        </>
      ) : (
        <>
          <div className="request_message">
            <span>{first_name}님의 메세지</span>
            <span>{response_message}</span>
          </div>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16.5V0.5H16L0 16.5Z" fill="#E5EFFE" />
          </svg>
        </>
      )}
    </StyledSpeechBubble>
  );
};

export default SpeechBubble;
