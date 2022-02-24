import { User } from './user';

export interface House {
  id: number;
  name: string;
  members?: User[];
}

export interface Member {
  members: User;
}
