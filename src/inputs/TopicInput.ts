import { mutation, params, query, types } from 'typed-graphqlify';

import { QueryArgs } from './CommonInputs';
import { Topic } from '../types/Topic';
import { serializeInput } from '../helpers/GraphqlHelper';

export const initiateCreateTopicFlowMutation = (input: Partial<Topic>) =>
  mutation({
    initiateCreateTopicFlow: params(
      { input: serializeInput(input) },
      { id: types.string, subject: types.string }
    ),
  }).toString();

export const getTopicsQuery = (args: QueryArgs<Topic>) =>
  query({
    getTopics: params(
      { ...serializeInput(args) },
      { id: types.string, subject: types.string }
    ),
  }).toString();
