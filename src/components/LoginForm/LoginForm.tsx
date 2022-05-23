import React from 'react';
import * as Styled from './LoginForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmail, setUserPassword, setUserList } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import { AnyAction } from 'redux';

const LoginForm = () => {
  const { userName, userEmail, userPassword, userList } = useSelector(
    (state: State) => state.profile
  );
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
      setUserList([
        ...userList,
        {
          userName: userName,
          userEmail: userEmail,
          userPassword: userPassword,
        },
      ])
    );
    dispatch(setUserEmail(''));
    dispatch(setUserPassword(''));
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setUserEmail)}
              placeholder="email:"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
