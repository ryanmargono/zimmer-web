import { Topic } from './Topic';
import { User } from './User';

export type Keyword = {
  keyword: string;
  rating: number;
  competition: string;
  searchVolume: string;
  costPerClick: number;
  topic: Topic;
  user: User;
};
