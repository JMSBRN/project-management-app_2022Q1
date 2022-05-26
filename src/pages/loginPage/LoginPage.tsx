import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to={'/main'} /> : <LoginForm />;
};

export default LoginPage;
