import { User } from './user';

export interface INotice {
  id: number;
  content: string;
  writer: User;
  writed_at: Date;
  updated_at: Date;
}
