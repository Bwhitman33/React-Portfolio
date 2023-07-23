import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <div className='body'>
        Stuff goes here
      </div>
      <Footer />
    </div>
  );
}
