import React from 'react';
import * as Styled from './LoginForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin, setUserLoginPassword } from '../../store/actions/actionCreators';
import { AnyAction } from 'redux';
import { State } from '../../store/utils';
import { apiLoginUser } from '../../Api';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const { userLogin, userLoginPassword } = useSelector((state: State) => state.login);
  const dispatch = useDispatch();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };
  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginUser = {
      login: userLogin,
      password: userLoginPassword,
    };
    apiLoginUser(loginUser);
    setTimeout(() => {
      const token = localStorage.getItem('token');
      if (token) {
        location.replace('/main');
      }
    }, 2000);
  };
  return (
    <Styled.Login_Form_main>
      <Styled.Login_Form_container>
        <Styled.Login_Form onSubmit={handleUserSubmit}>
          <label>
            {t('LoginForm.login')}
            <Styled.Login_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setUserLogin)}
              placeholder={t('LoginForm.login')}
              type="text"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <label>
            {t('LoginForm.password')}
            <Styled.Login_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, setUserLoginPassword)
              }
              placeholder={t('LoginForm.password')}
              type="password"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <Styled.Login_Form_input_submit type="submit" value={t('LoginForm.btn')} />
        </Styled.Login_Form>
      </Styled.Login_Form_container>
    </Styled.Login_Form_main>
  );
};

export default LoginForm;
