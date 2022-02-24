import { Favor } from '../interfaces/favor';
import { chore1 } from './dummyChore';
import { user1, user2 } from './dummyUser';

export const favor1: Favor = {
  id: 1,
  chore: chore1,
  _from: user2,
  to: user1,
  content: '지수님, 오늘 회식이 있는데 혹시 지수님에게 빨래를 부탁드려도 될까요?',
  sended_at: new Date(),
};
