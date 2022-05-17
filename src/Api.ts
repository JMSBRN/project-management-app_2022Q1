const base = 'https://serene-tor-19210.herokuapp.com';
const users = `${base}/users`;
const signUP = `${base}/signup`;
const signIn = `${base}/signin`;

export const getUsers = async () => {
  const resp = await fetch(users, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwYjJkYmZkYS04NjY5LTQ5MzctYjdhYS01ODZkNDBhOTQ3OTEiLCJsb2dpbiI6InVzZXIwMDEiLCJpYXQiOjE2NTI3OTEwNjl9.DLliAmBOq3m6DtIOyhtv39wS1_6kYR5PSrn_G1BUb7w',
    },
  });
  const data = resp.json();
  return data;
};
export const createUser = async (user: object) => {
  const resp = await fetch(signUP, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
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
  localStorage.setItem('token', JSON.stringify(content.token));
};
