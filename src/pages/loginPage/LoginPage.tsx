import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as Styled from './LoginPage.style';

const LoginPage = () => {
  const token = localStorage.getItem('token');
  return token ? (
    <Navigate to={'/main'} />
  ) : (
    <>
      <Styled.Main_title>Welcome to Trello Clone </Styled.Main_title>
      <LoginForm />
    </>
  );
};

export default LoginPage;
