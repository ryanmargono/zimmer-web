import { Article, SerializedArticle } from '../../types/Article';
import { createContext, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../AppContext';
import { Keyword } from '../../types/Keyword';
import { Loading } from '../../components/Loading';
import { ZimmerClient } from '../../clients/ZimmerClient';
import { getArticlesQuery } from '../../inputs/ArticleInput';
import { getKeywordsQuery } from '../../inputs/KeywordInput';

export type State = {
  articles: SerializedArticle[];
  selectedArticle: SerializedArticle | null;
};

type ContextValues = {
  state: State;

  setState: any;
};

const DEFAULT_STATE: State = {
  articles: [],
  selectedArticle: null,
};

export const ArticlesContext = createContext<ContextValues>({
  state: DEFAULT_STATE,
} as ContextValues);

export const ArticlesProvider = (props: any) => {
  const { appState } = useContext(AppContext);
  const [fetchLoading, setFetchLoading] = useState<boolean>(true);
  const [state, setState] = useState<State>(DEFAULT_STATE);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const articles = await ZimmerClient.graphQlRequest<Article[]>(
      getArticlesQuery({ where: { user: { id: appState.userId!! } } })
    );
    const serializedArticles = articles.map((a) => ({
      ...a,
      articleContent: JSON.parse(a.articleContent!!),
    }));

    await setState((state) => ({
      ...state,
      articles: serializedArticles,
      selectedArticle: serializedArticles[0] || null,
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
    <ArticlesContext.Provider value={contextValues}>
      {props.children}
    </ArticlesContext.Provider>
  );
};
