import React from 'react';
import * as Styled from './AuthForm.style';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserName,
  setUserEmail,
  setUserPassword,
  setUserList,
} from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import { AnyAction } from 'redux';

const AuthForm = () => {
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
    dispatch(setUserName(''));
    dispatch(setUserEmail(''));
    dispatch(setUserPassword(''));
  };

  return (
    <Styled.Auth_Form_main>
      <Styled.Auth_Form_container>
        <Styled.Auth_Form onSubmit={handleUserSubmit}>
          <label>
            Name:
            <Styled.Auth_Form_input
              data-testid="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setUserName)}
              placeholder="name:"
              type="text"
              pattern="[A-Za-z]{3}"
            />
            <br />
          </label>
          <span data-testid="error-name"></span>
          <label>
            Email:
            <Styled.Auth_Form_input
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
            <Styled.Auth_Form_input
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
          <label>
            Confirm Password:
            <Styled.Auth_Form_input
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
          <Styled.Auth_Form_input_submit type="submit" value="submit" />
        </Styled.Auth_Form>
      </Styled.Auth_Form_container>
    </Styled.Auth_Form_main>
  );
};

export default AuthForm;
