import React, { useState } from 'react';
import { createUser, loginUser } from '../../Api';
import './authForm.css';

const AuthForm = () => {
  const [userLogin, setUserLogin] = useState({ login: '', password: '' });
  const [userAuth, setUserAuth] = useState({ name: '', login: '', password: '' });
  const handlSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(userLogin);
  };
  const handlSubmitAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(userAuth);
  };
  const handlChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin((values) => ({ ...values, [name]: value }));
  };
  const handlChangeAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserAuth((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      MockLogin
      <form onSubmit={handlSubmitLogin}>
        <input onChange={handlChangeLogin} type="text" name="login" placeholder="login" />
        <br />
        <input onChange={handlChangeLogin} type="text" name="password" placeholder="password" />
        <input type="submit" />
      </form>
      MockAuth
      <form onSubmit={handlSubmitAuth}>
        <input onChange={handlChangeAuth} type="text" name="name" placeholder="name" />
        <br />
        <input onChange={handlChangeAuth} type="text" name="login" placeholder="login" />
        <br />
        <input onChange={handlChangeAuth} type="text" name="password" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AuthForm;
