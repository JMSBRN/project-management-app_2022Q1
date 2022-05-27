import React from 'react';
import AuthForm from '../../components/AuthForm.tsx/AuthForm';
import * as Styled from './authPage.style';

const AuthPage = () => {
  return (
    <Styled.Auth>
      <AuthForm />
    </Styled.Auth>
  );
};

export default AuthPage;
