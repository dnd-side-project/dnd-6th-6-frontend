import { House } from './house';

export interface Profile {
  id?: number;
  avatar?: string;
  house?: House;
}

export interface User {
  id: number;
  first_name: string;
  username: string;
  user_profile: Profile;
}
