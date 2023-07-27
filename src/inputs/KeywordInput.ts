import { mutation, params, query, types } from 'typed-graphqlify';

import { Keyword } from '../types/Keyword';
import { QueryArgs } from './CommonInputs';
import { serializeInput } from '../helpers/GraphqlHelper';

export const getKeywordsQuery = (args: QueryArgs<Keyword>) =>
  query({
    getKeywords: params(
      { ...serializeInput(args) },
      {
        id: types.string,
        keyword: types.string,
        competition: types.string,
        searchVolume: types.string,
        costPerClick: types.number,
        rating: types.number,
        recommended: types.boolean,
        selected: types.boolean,
        researching: types.boolean,
        topic: {
          id: types.string,
          subject: types.string,
        },
      }
    ),
  }).toString();
