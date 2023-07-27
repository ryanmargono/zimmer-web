import { mutation, params, query, rawString, types } from 'typed-graphqlify';

import { request } from 'graphql-request';

export class Client {
  endpoint = 'https://y3m9lx518j.execute-api.us-west-2.amazonaws.com';

  async graphQlRequest<T>(queryString: string): Promise<T> {
    const storedState = localStorage.getItem('appState');
    const token = storedState ? JSON.parse(storedState).sessionToken : '';
    const headers = {
      authorization: `Bearer ${token}`,
    };

    const res: any = await request(`${this.endpoint}/graphql`, queryString, headers);
    return res[Object.keys(res)[0]] as T;
  }
}

export const ZimmerClient = new Client();
