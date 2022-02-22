import { House } from './house';
import { User } from './user';

export interface Day {
  id: number;
  name: string;
}

export interface ChoreCategory {
  id: number;
  name: string;
}

export interface ChoreInfomation {
  id: number;
  name: string;
  house: House;
  category: ChoreCategory;
}

export interface Chore {
  id: number;
  assignees: User[];
  infomation: ChoreInfomation;
  planned_at: Date;
  completed_at: Date | null;
}

export interface RepeatChore {
  id: number;
  assignees: User[];
  information: ChoreInfomation;
  days: Day[];
}
