import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { receiveFavor } from '../../../apis/favor';
import { favor1 } from '../../../dummyData/dummyFavor';
import { Favor } from '../../../interfaces/favor';
import AppLayout from '../../Layouts/Applayout';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import Header from '../../UI/molecules/Header/Header';
import SpeechBubble from '../../UI/molecules/SpeechBubble/SpeechBubble';
import { StyledRequestReceive } from './RequestReceiveStyled';

// const favor = favor1;

export interface ITempRequestReceiveProps {
  choreId: string;
  favor: Favor;
}

const RequestReceive = ({ choreId, favor }: ITempRequestReceiveProps) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const onRejectClick = useCallback(() => {
    //거절하면 Main Page로
    navigate('/main');
  }, []);

  const onAcceptClick = useCallback(() => {
    //수락 Axios요청
    receiveFavor(+choreId as number, favor.id)
      .then(() => navigate('/main'))
      .catch((error) => console.log(error));
  }, [choreId, favor]);

  return (
    <AppLayout>
      <StyledRequestReceive>
        <Header onClick={goBack} mb="40px" title="부탁하기" />
        <Title mb="40px" fontWeight="700" fontSize="23px" lineHeight="33.25px">
          {favor._from.first_name}님이 {favor.chore.information.name}를 부탁했어요.
          <br />
          부탁을 들어주시겠어요?
          <br />
          <span className="requestReceive_notice">수락하면 일정에 자동으로 추가되요.</span>
        </Title>
        <div className="requestReceive_main">
          <SpeechBubble first_name={favor._from.first_name} response_message={favor.content} request={false} />
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
            수락하기
          </Button>
        </div>
      </StyledRequestReceive>
    </AppLayout>
  );
};

export default RequestReceive;
