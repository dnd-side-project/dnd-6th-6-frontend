import { House } from './house';

export interface Profile {
  avatar?: string;
  house?: House;
}

export interface User {
  id: number;
  first_name: string;
  username: string;
  profile?: Profile;
}
