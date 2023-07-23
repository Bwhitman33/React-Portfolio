import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    return (
    <nav>
        <ul className= "nav-bar">
             <li>
                <Link to="/" className="home">Home</Link> 
            </li>
            <li>
                <Link to="*about-me" className="about-me">About Me</Link> 
            </li>
            <li>
                <Link to="/showcase" className="showcase">Showcase</Link>
            </li>
            <li>
                <Link to="/resume" className="resume">Resume</Link>
            </li>
            <li>
                <Link to="/contact" className="contact">Contact</Link>
            </li>
        </ul>
    </nav>
    );
}