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
  const [editErrors, setEditErrors] = useState([]);
  const [id, setId] = useState('');
  const [userLogin, setUserLogin] = useState({ login: '', password: '' });
  const [userEdit, setUserEdit] = useState({ name: '', login: '' });
  const [userAuth, setUserAuth] = useState({ name: '', login: '', password: '' });
  getUsers();
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
    users.filter((el) => el.login === userLogin.login).map((el) => setId(el.id));
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
  const handlChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserEdit((values) => ({ ...values, [name]: value }));
  };
  const handleDeleteUser = () => {
    deleteUser(id);
    setTimeout(() => {
      setEditErrors(JSON.parse(localStorage.getItem('Edit_Error_msg') || '[]'));
    }, 1000);
  };
  return (
    <div>
      MockLogin
      <form onSubmit={handlSubmitLogin}>
        <input onChange={handlChangeLogin} type="text" name="login" placeholder="login" />
        <br />
        <input onChange={handlChangeLogin} type="text" name="password" placeholder="password" />
        <input type="submit" />
        <p style={{ color: 'red' }}>{loginErrors}</p>
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
      <p style={{ color: 'red' }}>{authErrors}</p>
      MockEdit
      <form>
        <input onChange={handlChangeEdit} type="text" name="name" placeholder="name" />
        <br />
        <input onChange={handlChangeEdit} type="text" name="login" placeholder="login" />
        <br />
      </form>
      <p style={{ color: 'red' }}>{editErrors}</p>
      <button onClick={handleDeleteUser}>Delete user</button>
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
