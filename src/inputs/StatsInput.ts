import { params, query, types } from 'typed-graphqlify';

import { HistoryLog } from '../types/HistoryLog';
import { QueryArgs } from './CommonInputs';
import { Stat } from '../types/Stat';
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

export const GetStatsQuery = (args: QueryArgs<Stat>) =>
  query({
    getStats: params(
      { ...serializeInput(args) },
      {
        id: types.string,
        minutesSaved: types.number,
        moneySaved: types.number,
        wordsWritten: types.number,
        minutesOfResearch: types.number,
        createdAt: types.string,
      }
    ),
  }).toString();
