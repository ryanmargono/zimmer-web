import { Keyword } from './Keyword';
import { User } from './User';

export type Topic = {
  keywords: Keyword[];
  id: string;
  createdAt: Date;
  updatedAt: Date;
  subject: string;
  user: User;
};
