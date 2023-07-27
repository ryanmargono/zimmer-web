import { createContext, useEffect, useState } from 'react';

type AppState = {
  isAuthenticated?: boolean;
  sessionToken?: string;
  authLoading?: boolean;
  userId?: string;
};

type AppContextValue = {
  appState: AppState;
  setAppState: any;
};

export const AppContext = createContext<AppContextValue>({} as AppContextValue);

export const AppProvider = (props: any) => {
  const [appState, setAppState] = useState<AppState>({
    isAuthenticated: false,
    sessionToken: '',
    authLoading: true,
  });

  useEffect(() => {
    const storedState = localStorage.getItem('appState');
    if (storedState) {
      setAppState({ ...JSON.parse(storedState), authLoading: false });
    }
  }, []);

  useEffect(() => {
    if (appState.sessionToken) {
      localStorage.setItem('appState', JSON.stringify(appState));
    }
  }, [appState.sessionToken]);

  const contextValue: AppContextValue = {
    appState,
    setAppState,
  };

  console.log(appState);

  return (
    <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
  );
};
