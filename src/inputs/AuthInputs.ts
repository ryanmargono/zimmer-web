import { mutation, params, rawString, types } from 'typed-graphqlify';

import { StringInput } from './CommonInputs';
import { serializeInput } from '../helpers/GraphqlHelper';

export const sendMagicLinkEmailMutation = (input: StringInput) =>
  mutation({
    sendMagicLinkEmail: params(
      { input: serializeInput(input) },
      { value: types.boolean }
    ),
  }).toString();

export const authenticateMagicLinkTokenMutation = (input: StringInput) =>
  mutation({
    authenticateMagicLinkToken: params(
      { input: serializeInput(input) },
      { value: types.string }
    ),
  }).toString();

export const authenticateSessionMutation = (input: StringInput) => {
  return mutation({
    authenticateSession: params(
      { input: serializeInput(input) },
      { value: types.string }
    ),
  }).toString();
};
