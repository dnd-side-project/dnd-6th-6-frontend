import { Chore, RepeatChore } from './chore';
import { User } from './user';

export interface ChoreComment {
  id: number;
  writer: User;
  chore: Chore;
  content: string;
  writed_at: Date;
}

export interface RepeatChoreComment {
  id: number;
  writer: User;
  reapeat_chore: RepeatChore;
  content: string;
  writed_at: Date;
}
