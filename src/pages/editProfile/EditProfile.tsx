import React from 'react';
import Button from '../../components/button/Button';
import './editProfile.css';

const EditProfile = () => {
  const handleSumit = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(e.target);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="edit">
      <div className="form-wrapper">
        <div className="user-info">
          <img src="" alt="user-log" />
          <div className="user-name">Name</div>
          <div className="user-email">Email</div>
          <div className="user-name">Password</div>
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
                  onChange={handleChangeName}
                  placeholder="email:"
                  type="email"
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
                  onChange={handleChangeName}
                  placeholder="password:"
                  type="password"
                />
                <br />
              </label>
              <span data-testid="error-name"></span>
            </div>
            <div className="form-btns-wrapper">
              <Button className="form-delete-user" textButton={'delete user'} />
              <Button className="form-submit" textButton={'submit'} />
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
