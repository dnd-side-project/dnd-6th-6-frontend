export interface Profile {
  avatar?: string;
  house?: string;
}

export interface User {
  id: number;
  first_name: string;
  username: string;
  profile: Profile;
}
