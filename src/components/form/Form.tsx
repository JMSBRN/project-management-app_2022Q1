import React from 'react';
import Button from '../button/Button';
import './form.css';

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
    <div className="edit">
      <div className="form-wrapper">
        <div className="user-info">
          <img src="" alt="user-logo" />
          <div className="user-name">Name</div>
          <div className="user-email">Email</div>
          <div className="user-password">Password</div>
        </div>
        <form action="|">
          <form className="edit-form" onSubmit={handleSumit}>
            <div className="form-input-wrapper">
              <label>
                Name:
                <input
                  data-testid="name-input"
                  onChange={handleChangeName}
                  placeholder="name:"
                  type="text"
                  pattern="[A-Za-z]{3}"
                />
                <br />
              </label>
              <span data-testid="error-name"></span>
            </div>
            <div className="form-input-wrapper">
              <label>
                Email:
                <input
                  data-testid="name-input"
                  onChange={handleChangeEmail}
                  placeholder="email:"
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <br />
              </label>
              <span data-testid="error-name"></span>
            </div>
            <div className="form-input-wrapper">
              <label>
                Password:
                <input
                  data-testid="name-input"
                  onChange={handleChangePassword}
                  placeholder="password:"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
                <br />
              </label>
              <span data-testid="error-name"></span>
            </div>
            <div className="form-btns-wrapper">
              <Button textButton={'delete user'}></Button>
              <input type="submit" value="submit" />
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};

export default Form;
