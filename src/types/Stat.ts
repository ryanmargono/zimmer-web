import { User } from './User';

export type Stat = {
  user: User;
  id: string;
  type: string;
  update: string;
  minutesSaved: number;
  moneySaved: number;
  wordsWritten: number;
  minutesOfResearch: number;
  createdAt: string;
};
