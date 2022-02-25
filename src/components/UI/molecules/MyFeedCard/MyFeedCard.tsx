import { MyFeedCardStyled } from './MyFeedCardStyled';
import { emojiImgURLs } from '../../../../utils/emoji';
import { categoryImgURLs } from '../../../../utils/category';
import moment from 'moment';

interface IMyFeedCard {
  time: Date;
  sender: string;
  category: string;
  emojitype: number;
}

const MyFeedCard = (props: IMyFeedCard) => {
  return (
    <MyFeedCardStyled>
      <div className="elapsedtime">{moment(props.time).fromNow()}</div>
      <div className="feedtext">
        <span>{props.sender}</span>님에게
        <br />
        피드백을 받았어요
      </div>
      <div className="emojibox">
        <img src={emojiImgURLs[props.emojitype].src} width={80} height={80} />
      </div>
      <div className="mywork">
        {props.category === '세탁하기' && <img src={categoryImgURLs[0].src} width={24} height={24} />}
        {props.category === '청소하기' && <img src={categoryImgURLs[1].src} width={24} height={24} />}
        {props.category === '쓰레기 버리기' && <img src={categoryImgURLs[2].src} width={24} height={24} />}
        {props.category === '요리하기' && <img src={categoryImgURLs[3].src} width={24} height={24} />}
        {props.category === '장보기' && <img src={categoryImgURLs[4].src} width={24} height={24} />}
        {props.category === '일회성 이벤트' && <img src={categoryImgURLs[5].src} width={24} height={24} />}
        <span>{props.category}</span>
      </div>
    </MyFeedCardStyled>
  );
};
export default MyFeedCard;
