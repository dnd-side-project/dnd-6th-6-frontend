import { Favor } from './favor';
import { Notice } from './notice';
import { User } from './user';

export interface Notification {
  id: number;
  notice?: Notice;
  favor?: Favor;
  to: User;
  created_at: Date;
  is_checked: boolean;
}
