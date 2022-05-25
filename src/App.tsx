import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './containers/layout/Layout';
import Welcome from './pages/welcome/Welcome';
import Main from './pages/main/Main';
import Board from './pages/board/Board';
import Footer from './containers/footer/Footer';
import NotFound from './pages/notFound/NotFound';
import AuthPage from './pages/authPage/AuthPage';
import './main.css';
import ProtectedRoute from './containers/protectedRoute/ProtectedRoute';
import EditProfile from './pages/editProfile/EditProfile';
import Header from './containers/header/Header';
import LoginPage from './pages/loginPage/LoginPage';
import { Boards } from './pages/boards/Boards';
import { useSelector } from 'react-redux';
import { State } from './store/utils';

function App() {
  const { loginList } = useSelector((state: State) => state.login);
  console.log(loginList);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<Header />}>
                <Route path="board" element={<Board />} />
                <Route path="boards" element={<Boards />} />
                <Route path="edit" element={<EditProfile />} />
                <Route path="main" element={<Main />} />
              </Route>
            </Route>
            <Route path="auth" element={<AuthPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="notFound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
