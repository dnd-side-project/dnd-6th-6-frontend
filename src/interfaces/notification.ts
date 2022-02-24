import { Favor } from './favor';
import { INotice } from './notice';
import { User } from './user';

export interface INotification {
  id: number;
  notice?: INotice;
  favor?: Favor;
  to?: User;
  created_at: Date;
  is_checked: boolean;
}
