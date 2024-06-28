// components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, roles, ...rest }) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated && (!roles || roles.includes(user.role)) ? (
        <Component {...rest} />
      ) : (
        <Navigate to="/login" replace />
      )}
    />
  );
};

export default ProtectedRoute;
