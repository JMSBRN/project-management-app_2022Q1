import React from 'react';
import Button from '../button/Button';
import * as Styled from './Form.style';

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
    <Styled.Form_main>
      <Styled.Form_container>
        <Styled.User_info>
          <img src="" alt="user-logo" />
          <div className="user-name">Name</div>
          <div className="user-email">Email</div>
          <div className="user-password">Password</div>
        </Styled.User_info>
        <Styled.Form onSubmit={handleSumit}>
          <Styled.Form_input_wrapper>
            <label>
              Name:
              <Styled.Form_input
                data-testid="name-input"
                onChange={handleChangeName}
                placeholder="name:"
                type="text"
                pattern="[A-Za-z]{3}"
              />
              <br />
            </label>
            <span data-testid="error-name"></span>
          </Styled.Form_input_wrapper>
          <Styled.Form_input_wrapper>
            <label>
              Email:
              <Styled.Form_input
                data-testid="name-input"
                onChange={handleChangeEmail}
                placeholder="email:"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <br />
            </label>
            <span data-testid="error-name"></span>
          </Styled.Form_input_wrapper>
          <Styled.Form_input_wrapper>
            <label>
              Password:
              <Styled.Form_input
                data-testid="name-input"
                onChange={handleChangePassword}
                placeholder="password:"
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              <br />
            </label>
            <span data-testid="error-name"></span>
          </Styled.Form_input_wrapper>
          <Styled.Form_btns_wrapper>
            <Button textButton={'delete user'}></Button>
            <Styled.Form_input_submit type="submit" value="submit" />
          </Styled.Form_btns_wrapper>
        </Styled.Form>
      </Styled.Form_container>
    </Styled.Form_main>
  );
};

export default Form;
