import { StyledTime } from './TimeStyled';
import 'moment/locale/ko';
import moment from 'moment';

type TimeClassName = 'chore' | 'basic' | 'day';

export interface IAtomTimeProps {
  createdAt: Date;
  className: TimeClassName;
}
const Time = ({ createdAt, className }: IAtomTimeProps) => {
  const now = moment().format('YYYY-MM-DD');
  const writeTime = moment(createdAt).format('YYYY-MM-DD');
  const diffTime = moment(writeTime).isBefore(now);
  const realWriteTime = moment(createdAt).format('MM월 DD일 dddd HH:mm');
  const day = moment(createdAt).format('dddd');
  return (
    <StyledTime>
      {className === 'chore' && `${realWriteTime}`}
      {className === 'basic' && (diffTime ? `${realWriteTime}` : moment(createdAt).fromNow())}
      {className === 'day' && day}
    </StyledTime>
  );
};

export default Time;
