import React from 'react';
import * as Styled from './ProfileForm.style';

interface FormProps {
  handleSumit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Form = ({
  handleSumit,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
}: FormProps) => {
  return (
    <Styled.Profile_Form_main>
      <Styled.Profile_Form_container>
        <Styled.User_info>
          <img src="" alt="user-logo" />
          <div className="user-name">Name</div>
          <div className="user-email">Email</div>
          <div className="user-password">Password</div>
        </Styled.User_info>
        <Styled.Profile_Form onSubmit={handleSumit}>
          <label>
            Name:
            <Styled.Profile_Form_input
              data-testid="name-input"
              onChange={handleChangeName}
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
              onChange={handleChangeEmail}
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
              onChange={handleChangePassword}
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
