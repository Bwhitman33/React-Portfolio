import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';

export default function Header() {
    return (
    <header className="header">
      <div >
        <h1>Brandon Whitman</h1>
        <Navigation />
      </div>
    </header>
    );
}
