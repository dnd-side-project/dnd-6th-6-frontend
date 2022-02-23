import { RepeatChore } from '../interfaces/chore';
import { user1, user2, user3 } from './dummyUser';

export const repeatChore1: RepeatChore = {
  id: 1,
  planned_at: new Date(),
  completed_at: new Date(),
  information: {
    id: 1,
    name: '빨래',
    house: {
      id: 1,
      name: '서울하우스',
    },
    category: {
      id: 1,
      name: '빨래',
    },
  },
  days: [
    {
      id: 1,
      name: '월',
    },
    {
      id: 2,
      name: '화',
    },
  ],
  assignees: [user2, user3],
  comments: [],
};

export const repeatChore2: RepeatChore = {
  id: 2,
  planned_at: new Date(),
  completed_at: null,
  information: {
    id: 1,
    name: '청소하기 및 널기',
    category: {
      id: 2,
      name: '청소',
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
  comments: [],
};
