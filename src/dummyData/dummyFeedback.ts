import { Feedback } from '../interfaces/feedback';
import { chore1, chore2, chore3 } from './dummyChore';
import { user2 } from './dummyUser';

export const feedback1: Feedback = {
  id: 1,
  chore: chore2,
  _from: user2,
  content:
    '오늘 하루도 고마워!! 깔끔하게 잘 했던데? 다음에 내 차례가 되면 나도 이만큼 해야할듯ㅠㅠ[정해진 일을 잘 수행했어요,시간 약속을 잘 지켰어요]',
  sended_at: new Date(),
};

export const feedback2: Feedback = {
  id: 2,
  chore: chore2,
  _from: user2,
  content: '[정해진 일을 잘 수행했어요,시간 약속을 잘 지켰어요]',
  sended_at: new Date(),
};
