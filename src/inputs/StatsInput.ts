import { params, query, types } from 'typed-graphqlify';

import { HistoryLog } from '../types/HistoryLog';
import { QueryArgs } from './CommonInputs';
import { serializeInput } from '../helpers/GraphqlHelper';

export const GetHistoryLogsQuery = (args: QueryArgs<HistoryLog>) =>
  query({
    getHistoryLogs: params(
      { ...serializeInput(args) },
      {
        id: types.string,
        type: types.string,
        update: types.string,
        minutesSaved: types.string,
        moneySaved: types.string,
        createdAt: types.string,
      }
    ),
  }).toString();
