import React, { useState } from 'react';
import { createUser, getUsers, loginUser } from '../../Api';
import './authForm.css';

interface User {
  id: string;
  name: string;
  login: string;
}
const AuthForm = () => {
  const localUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  const [users] = useState(localUsers);
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
  getUsers();
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
      <div>
        <br />
        Users in local
        {users.map((el) => (
          <div key={el.id}>
            <ul>
              <li>----------------------------------------------------------</li>
              <li>name : {el.name}</li>
              <li>login :{el.login}</li>
              <li> id: {el.id}</li>
              <li>----------------------------------------------------------</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthForm;
