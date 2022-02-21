import { useState } from 'react';
import { FeedbackSimpleWrapper, StyledFeedbackGiveSimple } from './FeedbackGiveSimpleStyled';

const simpleFeedbacks = ['시간 약속을 잘 지켜요', '정해진 일을 잘 수행했어요', '정말 열심히 노력했어요'];

export interface IMoleFeedbackGiveSimpleProps {
  onClick: (simpleFeedback: string) => void;
  checkSimpleMessages: string[];
}

const FeedbackGiveSimple = ({ onClick, checkSimpleMessages }: IMoleFeedbackGiveSimpleProps) => {
  // const [checkSimpleMessages, setCheckSimpleMessages] = useState<string[]>([]);
  // const onClickSimple = (simpleFeedback: string) => {
  //   if (checkSimpleMessages.includes(simpleFeedback)) {
  //     setCheckSimpleMessages((prevCheckSimpleMessages) =>
  //       prevCheckSimpleMessages.filter((prevCheck) => prevCheck !== simpleFeedback),
  //     );
  //     return;
  //   }
  //   setCheckSimpleMessages((prevCheckSimpleMessages) => [...prevCheckSimpleMessages, simpleFeedback]);
  // };
  return (
    <StyledFeedbackGiveSimple>
      {simpleFeedbacks.map((simpleFeedback) => (
        <FeedbackSimpleWrapper
          key={simpleFeedback}
          className="feedbackSimple_wrapper"
          onClick={() => onClick(simpleFeedback)}
          ischecked={checkSimpleMessages.includes(simpleFeedback)}
        >
          <div className="feedbackSimple_check">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 3.3L4.5 6.5L9.5 1" stroke="white" strokeWidth="1.2" />
            </svg>
          </div>
          <span>{simpleFeedback}</span>
        </FeedbackSimpleWrapper>
      ))}
    </StyledFeedbackGiveSimple>
  );
};

export default FeedbackGiveSimple;
