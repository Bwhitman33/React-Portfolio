import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bio from './components/About/About';
import Home from './components/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <div className='body'>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about-me" element={<Bio />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
