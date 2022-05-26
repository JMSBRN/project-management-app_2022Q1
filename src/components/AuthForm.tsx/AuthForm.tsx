import React from 'react';
import * as Styled from './AuthForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthName, setAuthLogin, setAuthPassword } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import { apiCreateUser } from '../../Api';

const AuthForm = () => {
  const { t } = useTranslation();
  const { name, login, password } = useSelector((state: State) => state.auth);
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
              pattern="[A-Za-z]{3}"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <label>
            {t('AuthForm.login')}:
            <Styled.Auth_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setAuthLogin)}
              placeholder={t('AuthForm.login')}
              type="text"
              pattern="^(?=[a-z_\d]*[a-z])[a-z_\d]{2,7}$"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
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
          <label>
            {t('AuthForm.confirmPass')}:
            <Styled.Auth_Form_input
              data-testid="name-input"
              placeholder={t('AuthForm.password')}
              type="password"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <Styled.Auth_Form_input_submit type="submit" value={t('AuthForm.btn')} />
        </Styled.Auth_Form>
      </Styled.Auth_Form_container>
    </Styled.Auth_Form_main>
  );
};

export default AuthForm;
