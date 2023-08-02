import { GetHistoryLogsQuery, GetStatsQuery } from '../../inputs/StatsInput';
import { createContext, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../AppContext';
import { Context } from 'vm';
import { HistoryLog } from '../../types/HistoryLog';
import { Keyword } from '../../types/Keyword';
import { Loading } from '../../components/Loading';
import { Stat } from '../../types/Stat';
import { Topic } from '../../types/Topic';
import { ZimmerClient } from '../../clients/ZimmerClient';
import { getKeywordsQuery } from '../../inputs/KeywordInput';
import { getTopicsQuery } from '../../inputs/TopicInput';

export type State = {
  historyLogs: HistoryLog[];
  stats: Stat | null;
};

type ContextValues = {
  state: State;
};

const DEFAULT_STATE: State = {
  historyLogs: [],
  stats: null,
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
    await setFetchLoading(true);

    const historyLogs = await ZimmerClient.graphQlRequest<HistoryLog[]>(
      GetHistoryLogsQuery({
        where: { user: { id: appState.userId!! } },
        options: { limit: 10 },
      })
    );

    const stats = await ZimmerClient.graphQlRequest<Stat[]>(
      GetStatsQuery({
        where: { user: { id: appState.userId!! } },
        options: { limit: 1 },
      })
    );
    await setState((state) => ({
      ...state,
      historyLogs,
      stats: stats[0],
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
