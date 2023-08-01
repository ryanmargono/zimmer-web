import { createContext, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../AppContext';
import { Context } from 'vm';
import { GetHistoryLogsQuery } from '../../inputs/StatsInput';
import { HistoryLog } from '../../types/HistoryLog';
import { Keyword } from '../../types/Keyword';
import { Loading } from '../../components/Loading';
import { Topic } from '../../types/Topic';
import { ZimmerClient } from '../../clients/ZimmerClient';
import { getKeywordsQuery } from '../../inputs/KeywordInput';
import { getTopicsQuery } from '../../inputs/TopicInput';

export type State = {
  historyLogs: HistoryLog[];
};

type ContextValues = {
  state: State;
};

const DEFAULT_STATE: State = {
  historyLogs: [],
};

export const DashboardContext = createContext<ContextValues>({
  state: DEFAULT_STATE,
} as ContextValues);

export const DashboardProvider = (props: any) => {
  const { appState } = useContext(AppContext);
  const [fetchLoading, setFetchLoading] = useState<boolean>(true);
  const [state, setState] = useState<State>(DEFAULT_STATE);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const historyLogs = await ZimmerClient.graphQlRequest<HistoryLog[]>(
      GetHistoryLogsQuery({
        where: { user: { id: appState.userId!! } },
        options: { limit: 10 },
      })
    );
    await setState((state) => ({
      ...state,
      historyLogs,
    }));

    await setFetchLoading(false);
  };

  const contextValues: ContextValues = {
    state,
  };

  console.log(state);

  return fetchLoading ? (
    <Loading />
  ) : (
    <DashboardContext.Provider value={contextValues}>
      {props.children}
    </DashboardContext.Provider>
  );
};
