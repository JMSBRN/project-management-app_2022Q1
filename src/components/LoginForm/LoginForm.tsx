import React from 'react';
import * as Styled from './LoginForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginList, setUserLogin, setUserPassword } from '../../store/actions/actionCreators';
import { AnyAction } from 'redux';
import { State } from '../../store/utils';

const LoginForm = () => {
  const { userLogin, userPassword, loginList } = useSelector((state: State) => state.login);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setLoginList([
        ...loginList,
        {
          userLogin: userLogin,
          userPassword: userPassword,
        },
      ])
    );
  };
  return (
    <Styled.Login_Form_main>
      <Styled.Login_Form_container>
        <Styled.User_info>
          <img src="" alt="user-logo" />
          <div className="user-email">Email</div>
          <div className="user-password">Password</div>
        </Styled.User_info>
        <Styled.Login_Form onSubmit={handleUserSubmit}>
          <label>
            Email:
            <Styled.Login_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setUserLogin)}
              placeholder="login:"
              type="text"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <label>
            Password:
            <Styled.Login_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, setUserPassword)
              }
              placeholder="password:"
              type="password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <Styled.Login_Form_input_submit type="submit" value="submit" />
        </Styled.Login_Form>
      </Styled.Login_Form_container>
    </Styled.Login_Form_main>
  );
};

export default LoginForm;
