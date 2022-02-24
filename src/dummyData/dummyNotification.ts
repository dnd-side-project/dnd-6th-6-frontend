import { INotification } from '../interfaces/notification';
import { chore1 } from './dummyChore';
import { user1, user2, user3 } from './dummyUser';

export const notification: INotification = {
  id: 1,
  notice: {
    id: 1,
    writer: user1,
    content: '테스트 3',
    writed_at: new Date(),
    updated_at: new Date(),
  },
  to: user2,
  created_at: new Date(),
  is_checked: false,
};

export const notification2: INotification = {
  id: 2,
  favor: {
    id: 1,
    chore: chore1,
    content: '테스트 3',
    _from: user3,
    to: user2,
    sended_at: new Date(),
  },
  // to: user2,
  created_at: new Date(),
  is_checked: false,
};
