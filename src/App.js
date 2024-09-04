import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Example from './components/Example.tsx';
import Home from './pages/Home.tsx';
import Sobre from './pages/Sobre.tsx';
import './input.css';
import 'antd/dist/reset.css'

function App() {
  return (
    <Router>
      <Header />
      <nav className="mx-auto max-w-sm">
        <ul className="flex">
          <li className="font-bold text-blue-700 p-2 mx-auto max-w-sm"><Link to="/">Home</Link></li>
          <li className="font-bold text-blue-700 p-2 mx-auto max-w-sm"><Link to="/sobre">Sobre</Link></li>
        </ul>
        <Example  />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre  />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
