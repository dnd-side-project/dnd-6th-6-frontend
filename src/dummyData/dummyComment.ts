import { ChoreComment, RepeatChoreComment } from '../interfaces/comment';
import { chore1 } from './dummyChore';
import { repeatChore1 } from './dummyRepeatChore';
import { user1, user2, user3 } from './dummyUser';

export const repeatComment1: RepeatChoreComment = {
  id: 1,
  writer: user2,
  repeat_chore: repeatChore1,
  content: '테스트 댓글1',
  writed_at: new Date(),
};

export const repeatComment2: RepeatChoreComment = {
  id: 2,
  writer: user1,
  repeat_chore: repeatChore1,
  content: '테스트 댓글1',
  writed_at: new Date(),
};

export const repeatComment3: RepeatChoreComment = {
  id: 3,
  writer: user3,
  repeat_chore: repeatChore1,
  content: '테스트 댓글1',
  writed_at: new Date(),
};

export const repeatComment4: RepeatChoreComment = {
  id: 4,
  writer: user2,
  repeat_chore: repeatChore1,
  content: '테스트 댓글1',
  writed_at: new Date(),
};

export const onetimeComment1: ChoreComment = {
  id: 1,
  writer: user2,
  chore: chore1,
  content: '테스트 댓글1',
  writed_at: new Date(),
};

export const onetimeComment2: ChoreComment = {
  id: 2,
  writer: user1,
  chore: chore1,
  content: '테스트 댓글1',
  writed_at: new Date(),
};

export const onetimeComment3: ChoreComment = {
  id: 3,
  writer: user3,
  chore: chore1,
  content: '테스트 댓글1',
  writed_at: new Date(),
};

export const onetimeComment4: ChoreComment = {
  id: 4,
  writer: user2,
  chore: chore1,
  content: '테스트 댓글1',
  writed_at: new Date(),
};
