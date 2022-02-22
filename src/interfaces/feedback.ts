import { Chore, RepeatChore } from './chore';
import { User } from './user';

export interface Feedback {
  id: number;
  chore: Chore | RepeatChore;
  _from: User;
  content: string;
  sended_at: Date;
}
