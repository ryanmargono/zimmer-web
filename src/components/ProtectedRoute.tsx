import { LoadingOverlay, LoadingSpinner } from '@saas-ui/react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AppContext } from '../AppContext';
import { useContext } from 'react';

export const ProtectedRoute = () => {
  const { appState } = useContext(AppContext);
  const location = useLocation();

  if (appState.authLoading) {
    return (
      <LoadingOverlay>
        <LoadingSpinner />
      </LoadingOverlay>
    );
  }

  return appState.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/auth' state={{ from: location }} replace />
  );
};
