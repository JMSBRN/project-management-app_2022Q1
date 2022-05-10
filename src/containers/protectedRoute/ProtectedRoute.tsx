import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  user: boolean;
  children?: JSX.Element;
}
const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
