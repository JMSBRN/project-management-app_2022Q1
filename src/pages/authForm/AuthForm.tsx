import React, { useEffect, useState } from 'react';
import { createUser, deleteUser, getUsers, loginUser } from '../../Api';
import './authForm.css';

interface User {
  id: string;
  name: string;
  login: string;
}
const AuthForm = () => {
  const localUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  const [users, setUsers] = useState(localUsers);
  const [authErrors, setAuthErrors] = useState([]);
  const [loginErrors, setloginErrors] = useState([]);
  const [userLogin, setUserLogin] = useState({ login: '', password: '' });
  const [userAuth, setUserAuth] = useState({ name: '', login: '', password: '' });
  useEffect(() => {
    setTimeout(() => {
      setUsers(JSON.parse(localStorage.getItem('users') || '[]'));
    }, 1000);
  }, []);
  const handlSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(userLogin);
    setTimeout(() => {
      setloginErrors(JSON.parse(localStorage.getItem('Login_Error_msg') || '[]'));
    }, 1000);
    users
      .filter((el) => el.login === userLogin.login)
      .map((el) => localStorage.setItem('id', el.id));
  };
  const handlSubmitAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(userAuth);
    setTimeout(() => {
      setAuthErrors(JSON.parse(localStorage.getItem('Auth_Error_msg') || '[]'));
    }, 1000);
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
  const handleDeleteUser = () => {
    const id = localStorage.getItem('id');
    deleteUser(id || '');
  };
  return (
    <div>
      MockLogin
      <form onSubmit={handlSubmitLogin}>
        <input onChange={handlChangeLogin} type="text" name="login" placeholder="login" />
        <br />
        <input onChange={handlChangeLogin} type="text" name="password" placeholder="password" />
        <input type="submit" />
        <p style={{ color: 'red' }}>
          {loginErrors.length <= 0
            ? loginErrors.filter((el: string) => el.length > 0)
            : loginErrors}
        </p>
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
      <br />
      <p style={{ color: 'red' }}>
        {authErrors.length <= 0 ? authErrors.filter((el: string) => el.length > 0) : authErrors}
      </p>
      MockEdit
      <form onSubmit={handlSubmitAuth}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="text" name="login" placeholder="login" />
        <br />
        <input type="submit" />
        <button onClick={handleDeleteUser}>Delete user</button>
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
