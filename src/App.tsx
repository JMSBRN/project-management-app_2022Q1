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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Welcome />} />
          <Route path="main" element={<Main />} />
          <Route path="board" element={<Board />} />
          <Route path="notFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
