const base = 'https://serene-tor-19210.herokuapp.com';
const users = `${base}/users`;
const signUp = `${base}/signup`;
const signIn = `${base}/signin`;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwYjJkYmZkYS04NjY5LTQ5MzctYjdhYS01ODZkNDBhOTQ3OTEiLCJsb2dpbiI6InVzZXIwMDEiLCJpYXQiOjE2NTI3OTEwNjl9.DLliAmBOq3m6DtIOyhtv39wS1_6kYR5PSrn_G1BUb7w';

export const getUsers = async () => {
  const resp = await fetch(users, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await resp.json();
  localStorage.setItem('users', JSON.stringify(data));
  return data;
};
export const createUser = async (user: object) => {
  const resp = await fetch(signUp, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await resp.json();
  localStorage.setItem('Auth_Error_msg', JSON.stringify(content.message) || '');
  localStorage.setItem('name', JSON.stringify(content.name || ''));
  localStorage.setItem('id', JSON.stringify(content.id || ''));
};
export const loginUser = async (user: object) => {
  const resp = await fetch(signIn, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await resp.json();
  localStorage.setItem('Login_Error_msg', JSON.stringify(content.message) || '');
  localStorage.setItem('token', JSON.stringify(content.token) || '');
};
export const deleteUser = async (id: string) => {
  await fetch(`${users}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
