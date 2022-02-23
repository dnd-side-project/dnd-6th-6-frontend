import { MyFeedCardStyled } from './MyFeedCardStyled';

interface IMyFeedCard {
  time: string;
  sender: string;
  emojiindex: number;
  mywork: string;
}
const MyFeedCard = (props: IMyFeedCard) => {
  return (
    <MyFeedCardStyled>
      <div className="elapsedtime">{props.time}</div>
      <div className="feedtext">
        <span>{props.sender}</span>님에게
        <br />
        피드백을 받았어요
      </div>
      <div className="emojibox">{props.emojiindex}</div>
      <div className="mywork">
        아이콘<span>{props.mywork}</span>
      </div>
    </MyFeedCardStyled>
  );
};
export default MyFeedCard;
