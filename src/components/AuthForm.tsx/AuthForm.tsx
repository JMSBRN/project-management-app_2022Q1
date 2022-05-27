import React from 'react';
import * as Styled from './AuthForm.style';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuthName,
  setAuthLogin,
  setAuthPassword,
  setAuthNameError,
  setAuthLoginError,
  setAuthPasswordError,
} from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import { apiCreateUser } from '../../Api';

const AuthForm = () => {
  const { t } = useTranslation();
  const { name, login, password } = useSelector((state: State) => state.auth);
  const error = useSelector((state: State) => state.error);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authUser = {
      name: name,
      login: login,
      password: password,
    };
    apiCreateUser(authUser);
    setTimeout(() => {
      const errors = JSON.parse(localStorage.getItem('Auth_Error_msg') || '');
      const nameError = errors.filter((el: string) => el.includes('name'));
      const loginError = errors.filter((el: string) => el.includes('login'));
      const passwordError = errors.filter((el: string) => el.includes('password'));
      dispatch(setAuthNameError(nameError));
      dispatch(setAuthLoginError(loginError));
      dispatch(setAuthPasswordError(passwordError));
    }, 2000);
  };

  return (
    <Styled.Auth_Form_main>
      <Styled.Auth_Form_container>
        <Styled.Auth_Form onSubmit={handleUserSubmit}>
          <label>
            {t('AuthForm.name')}:
            <Styled.Auth_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setAuthName)}
              placeholder={t('AuthForm.name')}
              type="text"
              pattern="[A-Za-z]{2,}"
            />
            <br />
          </label>
          <Styled.errors>{error.authNameError}</Styled.errors>
          <label>
            {t('AuthForm.login')}:
            <Styled.Auth_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setAuthLogin)}
              placeholder={t('AuthForm.login')}
              type="text"
              pattern="[a-zA-ZА-Яа-яЁё][a-zA-ZА-Яа-яЁё0-9]{1,15}"
            />
            <br />
          </label>
          <Styled.errors>{error.authLoginError}</Styled.errors>
          <label>
            {t('AuthForm.password')}:
            <Styled.Auth_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, setAuthPassword)
              }
              placeholder={t('AuthForm.password')}
              type="password"
            />
            <br />
          </label>
          <Styled.errors>{error.authPasswordError}</Styled.errors>
          <label>
            {t('AuthForm.confirmPass')}:
            <Styled.Auth_Form_input
              data-testid="name-input"
              placeholder={t('AuthForm.password')}
              type="password"
            />
            <br />
          </label>
          <Styled.Auth_Form_input_submit type="submit" value={t('AuthForm.btn')} />
        </Styled.Auth_Form>
      </Styled.Auth_Form_container>
    </Styled.Auth_Form_main>
  );
};

export default AuthForm;
