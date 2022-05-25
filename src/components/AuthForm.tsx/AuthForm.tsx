import React from 'react';
import * as Styled from './AuthForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthName, setAuthEmail, setAuthPassword } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';

const AuthForm = () => {
  const { t } = useTranslation();
  const { name, email, password } = useSelector((state: State) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
    dispatch(setAuthName(name));
    dispatch(setAuthEmail(email));
    dispatch(setAuthPassword(password));
  };

  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
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
              // pattern="[A-Za-z]{3}"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <label>
            {t('AuthForm.email')}:
            <Styled.Auth_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setAuthEmail)}
              placeholder={t('AuthForm.email')}
              type="text"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <br />
          </label>
          <label>
            {t('AuthForm.confirmPass')}:
            <Styled.Auth_Form_input
              data-testid="name-input"
              placeholder={t('AuthForm.password')}
              type="password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
