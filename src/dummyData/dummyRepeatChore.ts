import { RepeatChore } from '../interfaces/chore';
import { user1, user2, user3 } from './dummyUser';

export const repeatChore1: RepeatChore = {
  id: 1,
  planned_at: new Date(),
  completed_at: new Date(),
  information: {
    id: 1,
    name: '분리수거',
    house: {
      id: 1,
      name: '서울하우스',
    },
    category: {
      id: 2,
      name: '분리수거',
    },
  },
  days: [
    {
      id: 1,
      name: '월요일',
    },
  ],
  assignees: [user2, user3],
};

export const repeatChore2: RepeatChore = {
  id: 2,
  planned_at: new Date(),
  completed_at: null,
  information: {
    id: 1,
    name: '세탁하기 및 널기',
    category: {
      id: 1,
      name: '세탁',
    },
    house: {
      id: 1,
      name: '서울하우스',
    },
  },
  days: [
    {
      id: 4,
      name: '목',
    },
  ],
  assignees: [user1],
};
