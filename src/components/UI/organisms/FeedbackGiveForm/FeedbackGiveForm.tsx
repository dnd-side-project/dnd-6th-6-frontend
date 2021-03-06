import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import Label from '../../atoms/Label/Label';
import Textarea from '../../atoms/Textarea/Textarea';
import { StyledFeedbackGiveForm } from './FeedbackGiveFormStyled';
import imgChoose from '../../../../src_assets/imgChoose.svg';
import FeedbackGiveSimple from '../../molecules/FeedbackGiveSimple/FeedbackGiveSimple';
import ChooseEmojiModal from '../../molecules/ChooseEmojiModal.tsx/ChooseEmojiModal';
import { sendFeedbackAPI } from '../../../../apis/feedback';
import { useNavigate } from 'react-router';
interface IForm {
  message: string;
}

export interface IOrgFeedbackGiveFormProps {
  choreId: number;
}

const FeedbackGiveForm = ({ choreId }: IOrgFeedbackGiveFormProps) => {
  const navigate = useNavigate();
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [chooseEmoji, setChooseEmoji] = useState<{ src: string; id: number; emoji: string }>();
  const [checkSimpleMessages, setCheckSimpleMessages] = useState<string[]>([]);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onClickImgChoose = (emoji: { src: string; id: number; emoji: string }) => {
    console.log(emoji);
    setChooseEmoji(emoji);
  };

  const onShowImgChoose = () => {
    setShowEmojiModal((prev) => !prev);
  };

  const onClickSimple = (simpleFeedback: string) => {
    if (checkSimpleMessages.includes(simpleFeedback)) {
      setCheckSimpleMessages((prevCheckSimpleMessages) =>
        prevCheckSimpleMessages.filter((prevCheck) => prevCheck !== simpleFeedback),
      );
      return;
    }
    setCheckSimpleMessages((prevCheckSimpleMessages) => [...prevCheckSimpleMessages, simpleFeedback]);
  };
  const onValid = (data: IForm) => {
    console.log({ ...data, emoji: chooseEmoji?.emoji, checkSimpleMessages });
    console.log(`[${checkSimpleMessages}]`);
    sendFeedbackAPI({ choreId, content: `${data.message}[${checkSimpleMessages}]`, emoji: chooseEmoji?.id as number })
      .then(() => {
        navigate('/main');
      })
      .catch((e) => console.log(e));
  };

  console.log(chooseEmoji?.emoji === undefined || (watch('message') === '' && checkSimpleMessages.length === 0));
  return (
    <StyledFeedbackGiveForm onSubmit={handleSubmit(onValid)}>
      <div className="feedbackgive_emoji" onClick={onShowImgChoose}>
        <img src={!chooseEmoji ? imgChoose : chooseEmoji.src} />
      </div>
      <div className="feedbackgive_simple">
        <Label color="#3F4245" fontWeight="700" fontSize="17px" mb="16px">
          ????????? ???????????? ???????????????!
        </Label>
        <FeedbackGiveSimple onClick={onClickSimple} checkSimpleMessages={checkSimpleMessages} />
      </div>
      <div className="feedbackgive_message">
        <Label color="#3F4245" fontWeight="700" fontSize="17px" mb="16px">
          ???????????? ????????????????
        </Label>
        <Textarea
          register={{
            ...register('message'),
          }}
          height="126px"
          bgColor="#EFF5FE"
          placeholder="???????????? ???????????? ????????? ??????????"
        />
      </div>
      <Button
        disabled={chooseEmoji?.emoji === undefined || (watch('message') === '' && checkSimpleMessages.length === 0)}
        className="basic"
      >
        ????????? ?????????
      </Button>
      {showEmojiModal && (
        <ChooseEmojiModal
          setShowEmojiModal={setShowEmojiModal}
          onClick={onClickImgChoose}
          checkEmoji={chooseEmoji?.emoji}
        />
      )}
    </StyledFeedbackGiveForm>
  );
};

export default FeedbackGiveForm;

// disabled true
// ???????????? ?????? ?????????
// ????????? ???????????? ????????? ???????????? ????????????
