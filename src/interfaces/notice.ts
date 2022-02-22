import { User } from './user';

export interface Notice {
  id: number;
  content: string;
  writer: User;
  writed_at: Date;
  updated_at: Date;
}
