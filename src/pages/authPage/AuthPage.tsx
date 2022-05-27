import React from 'react';
import AuthForm from '../../components/AuthForm.tsx/AuthForm';
import * as Styled from './authPage.style';

const AuthPage = () => {
  return (
    <Styled.Auth>
      <Styled.Main_title>Plase fill this out all fields...</Styled.Main_title>
      <AuthForm />
    </Styled.Auth>
  );
};

export default AuthPage;
