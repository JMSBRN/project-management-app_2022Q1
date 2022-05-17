import React, { DispatchWithoutAction } from 'react';
import * as Styled from './ProfileForm.style';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserName,
  setUserEmail,
  setUserPassword,
  setUserList,
} from '../../store/actions/actionCreators';
import { State } from '../../store/utils';


const Form = () => {
  const { userName, userEmail, userPassword, userList } = useSelector(
    (state: State) => state.profile
  );
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => any
  ) => {
    dispatch(callback(e.target.value)); //I have a mistake here when type is: (value: string) => void
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
    // first task add after second click?????????????????
    console.log(userList);
  };

  return (
    <Styled.Profile_Form_main>
      <Styled.Profile_Form_container>
        <Styled.User_info>
          <img src="" alt="user-logo" />
          <div className="user-name">Name</div>
          <div className="user-email">Email</div>
          <div className="user-password">Password</div>
        </Styled.User_info>
        <Styled.Profile_Form onSubmit={handleUserSubmit}>
          <label>
            Name:
            <Styled.Profile_Form_input
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
            <Styled.Profile_Form_input
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
            <Styled.Profile_Form_input
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
          <Styled.Profile_Form_btns_wrapper>
            <Styled.Profile_Form_input_submit type="submit" value="submit" />
          </Styled.Profile_Form_btns_wrapper>
        </Styled.Profile_Form>
      </Styled.Profile_Form_container>
    </Styled.Profile_Form_main>
  );
};

export default Form;
