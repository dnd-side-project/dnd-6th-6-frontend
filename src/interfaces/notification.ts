import { Favor } from './favor';
import { Feedback } from './feedback';
import { INotice } from './notice';
import { User } from './user';

export interface INotification {
  id: number;
  notice?: INotice;
  favor?: Favor;
  feedback?: Feedback;
  to?: User;
  created_at: Date;
  is_checked: boolean;
}
