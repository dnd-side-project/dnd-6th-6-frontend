import { StyledTime } from './TimeStyled';
import 'moment/locale/ko';
import moment from 'moment';

type TimeClassName = 'chore' | 'basic';

export interface IAtomTimeProps {
  createdAt: Date;
  className?: TimeClassName;
}
const Time = ({ createdAt, className }: IAtomTimeProps) => {
  const now = moment().format('YYYY-MM-DD');
  const writeTime = moment(createdAt).format('YYYY-MM-DD');
  const diffTime = moment(writeTime).isBefore(now);
  const realWriteTime = moment(createdAt).format('MM월 DD일 dddd HH:mm');
  return (
    <StyledTime>
      {className === 'chore' ? `${realWriteTime}` : diffTime ? `${realWriteTime}` : moment(createdAt).fromNow()}
    </StyledTime>
  );
};

export default Time;
