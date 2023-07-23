import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bio from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <div className='body'>
        <Routes>
          <Route path="*" element={<Bio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
