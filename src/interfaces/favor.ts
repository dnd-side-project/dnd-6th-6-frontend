import { Chore, RepeatChore } from './chore';
import { User } from './user';

export interface Favor {
  id: number;
  chore: RepeatChore | Chore;
  _from: User;
  to: User;
  content: string;
  sended_at: Date;
}
