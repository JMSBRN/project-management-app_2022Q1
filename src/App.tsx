import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './containers/layout/Layout';
import Header from './containers/header/Header';
import Welcome from './pages/welcome/Welcome';
import Main from './pages/main/Main';
import Board from './pages/board/Board';
import Footer from './containers/footer/Footer';
import NotFound from './pages/notFound/NotFound';
import AuthForm from './pages/authForm/AuthForm';
import './main.css';
import ProtectedRoute from './containers/protectedRoute/ProtectedRoute';
import EditProfile from './pages/editProfile/EditProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route element={<ProtectedRoute />}>
              <Route path="board" element={<Board />} />
              <Route path="edit" element={<EditProfile />} />
              <Route path="main" element={<Main />} />
            </Route>
            <Route path="auth" element={<AuthForm />} />
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
