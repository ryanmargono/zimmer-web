import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ModalsProvider, SaasProvider } from '@saas-ui/react';

import { App } from './App';
import { AppLayout } from './layouts/AppLayout';
import { AppProvider } from './AppContext';
import { Articles } from './pages/Articles/Articles';
import { Auth } from './pages/Auth/Auth';
import { AuthLayout } from './layouts/AuthLayout';
import { ControlPanel } from './pages/ControlPanel/ControlPanel';
import { ProtectedRoute } from './components/ProtectedRoute';
import ReactDOM from 'react-dom/client';
import { Verify } from './pages/Verify/Verify';
import { extendTheme } from '@chakra-ui/react';
import { theme as proTheme } from '@saas-ui-pro/react';

// 2. Extend your theme
const theme = extendTheme(
  {
    // your custom theme
  },
  proTheme
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <SaasProvider theme={theme}>
    <ModalsProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path='/auth' element={<Auth />} />
              <Route path='/verify' element={<Verify />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path='/research' element={<ControlPanel />} />
                <Route path='/articles' element={<Articles />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ModalsProvider>
  </SaasProvider>
);
