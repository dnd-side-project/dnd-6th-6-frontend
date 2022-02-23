import { Chore } from '../interfaces/chore';
import { user1, user2, user3 } from './dummyUser';

export const chore1: Chore = {
  id: 1,
  planned_at: new Date(),
  completed_at: new Date(),
  information: {
    id: 1,
    name: '청소 일회성',
    house: {
      id: 1,
      name: '서울하우스',
    },
    category: {
      id: 3,
      name: '일회성',
    },
  },
  assignees: [user1],
  comments: [],
};

export const chore2: Chore = {
  id: 2,
  planned_at: new Date(),
  completed_at: new Date(),
  information: {
    id: 2,
    name: '다용도실 청소하기',
    house: {
      id: 1,
      name: '서울하우스',
    },
    category: {
      id: 3,
      name: '청소',
    },
  },
  assignees: [user1, user2, user3],
  comments: [],
};

export const chore3: Chore = {
  id: 3,
  planned_at: new Date(),
  completed_at: null,
  information: {
    id: 3,
    name: '분리수거',
    house: {
      id: 1,
      name: '서울하우스',
    },
    category: {
      id: 1,
      name: '빨래',
    },
  },
  assignees: [user1, user2],
  comments: [],
};
