import { createContext, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../AppContext';
import { Context } from 'vm';
import { Keyword } from '../../types/Keyword';
import { Loading } from '../../components/Loading';
import { Topic } from '../../types/Topic';
import { ZimmerClient } from '../../clients/ZimmerClient';
import { getKeywordsQuery } from '../../inputs/KeywordInput';
import { getTopicsQuery } from '../../inputs/TopicInput';

export type State = {
  topics: Topic[];
  selectedTopic: Topic | null;

  keywords: Keyword[];
  selectedKeywords: Keyword[];
};

type ContextValues = {
  state: State;

  setState: any;
};

const DEFAULT_STATE: State = {
  topics: [],
  selectedTopic: null,
  keywords: [],
  selectedKeywords: [],
};

export const ControlPanelContext = createContext<ContextValues>({
  state: DEFAULT_STATE,
} as ContextValues);

export const ControlPanelProvider = (props: any) => {
  const { appState } = useContext(AppContext);
  const [fetchLoading, setFetchLoading] = useState<boolean>(true);
  const [state, setState] = useState<State>(DEFAULT_STATE);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const topics = await ZimmerClient.graphQlRequest<Topic[]>(
      getTopicsQuery({ where: { user: { id: appState.userId!! } } })
    );
    const keywords = await ZimmerClient.graphQlRequest<Keyword[]>(
      getKeywordsQuery({ where: { user: { id: appState.userId!! } } })
    );

    await setState((state) => ({
      ...state,
      topics,
      keywords,
      selectedTopic: topics[0] || null,
      selectedKeywords: topics[0]
        ? keywords.filter((k) => k.topic.id === topics[0].id)
        : [],
    }));

    await setFetchLoading(false);
  };

  const contextValues: ContextValues = {
    state,
    setState,
  };

  console.log(state);

  return fetchLoading ? (
    <Loading />
  ) : (
    <ControlPanelContext.Provider value={contextValues}>
      {props.children}
    </ControlPanelContext.Provider>
  );
};
