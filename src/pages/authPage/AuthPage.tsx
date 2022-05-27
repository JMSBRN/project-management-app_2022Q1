import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthForm from '../../components/AuthForm.tsx/AuthForm';
import * as Styled from './authPage.style';

const AuthPage = () => {
  const { t } = useTranslation();
  return (
    <Styled.Auth>
      <Styled.Main_title>{t('AuthPage.mainTitle')}</Styled.Main_title>
      <AuthForm />
    </Styled.Auth>
  );
};

export default AuthPage;
