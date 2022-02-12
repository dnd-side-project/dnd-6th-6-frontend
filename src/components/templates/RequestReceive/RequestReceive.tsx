import { useCallback } from 'react';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import SpeechBubble from '../../UI/molecules/SpeechBubble/SpeechBubble';
import { StyledRequestReceive } from './RequestReceiveStyled';

const requestInfo = {
  user: {
    first_name: '유진',
  },
  event: '빨래',
  content: '지수님, 오늘 회식이 있는데 혹시 지수님에게 빨래를 부탁드려도 될까요?',
};

export interface ITempRequestReceiveProps {}

const RequestReceive = (props: ITempRequestReceiveProps) => {
  const onRejectClick = useCallback(() => {
    //거절 Axios요청
  }, []);

  const onAcceptClick = useCallback(() => {
    //수락 Axios요청
  }, []);

  return (
    <AppLayout>
      <StyledRequestReceive>
        <Header mb="40px" title="부탁하기" />
        <Title mb="40px" fontWeight="700" fontSize="23px" lineHeight="33.25px">
          {requestInfo.user.first_name}님이 {requestInfo.event}를 부탁했어요.
          <br />
          부탁을 들어주시겠어요?
          <br />
          <span className="requestReceive_notice">수락하면 일정에 자동으로 추가되요.</span>
        </Title>
        <div className="requestReceive_main">
          <SpeechBubble
            first_name={requestInfo.user.first_name}
            response_message={requestInfo.content}
            request={false}
          />
        </div>
        <div className="requestReceive_button_wraaper">
          <Button
            onClick={onRejectClick}
            type="button"
            className="requestReceive_button_reject"
            bgColor="#EDEDED"
            color="#3F4245"
          >
            거절하기
          </Button>
          <Button
            onClick={onAcceptClick}
            type="button"
            className="requestReceive_button_accept"
            bgColor="#64ADF5"
            color="#ffffff"
          >
            부탁하기
          </Button>
        </div>
      </StyledRequestReceive>
    </AppLayout>
  );
};

export default RequestReceive;
