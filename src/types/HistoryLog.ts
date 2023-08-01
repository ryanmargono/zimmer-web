import { User } from './User';

export type HistoryLog = {
  user: User;
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  type?: string;
  update?: string;
  minutesSaved?: string;
  moneySaved?: string;
};
