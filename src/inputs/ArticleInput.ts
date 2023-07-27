import { mutation, params, query, types } from 'typed-graphqlify';

import { Article } from '../types/Article';
import { QueryArgs } from './CommonInputs';
import { Topic } from '../types/Topic';
import { serializeInput } from '../helpers/GraphqlHelper';

export const getArticlesQuery = (args: QueryArgs<Article>) =>
  query({
    getArticles: params(
      { ...serializeInput(args) },
      {
        id: types.string,
        title: types.string,
        articleContent: types.string,
        status: types.string,
      }
    ),
  }).toString();
