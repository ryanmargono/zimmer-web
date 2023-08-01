import { Keyword } from './Keyword';
import { Topic } from './Topic';
import { User } from './User';

export type Article = {
  user: User;
  keyword: Keyword;
  topic: Topic;
  id: string;
  createdAt: Date;
  intent: string | null;
  longTailKeyword: string | null;
  targetAudience: string | null;
  title: string | null;
  articleContent: string | null;
  status: string;
};

export type SerializedArticle = Article & {
  articleContent: {
    title: string;
    metaDescription: string;
    introduction: string;
    sectionASubheading: string;
    sectionAParagraphs: string[];
    sectionBSubheading: string;
    sectionBParagraphs: string[];
    sectionCSubheading: string;
    sectionCParagraphs: string[];
    conclusion: string;
    citations: string[];
  };
};
