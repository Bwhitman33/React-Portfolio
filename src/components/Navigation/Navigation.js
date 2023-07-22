import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    return (
    <nav>
        <ul className= "nav-bar">
            <li>
                <NavLink to="/about-me" className="about-me">About Me</NavLink> 
            </li>
            <li>
                <NavLink to="/showcase" className="showcase">Showcase</NavLink>
            </li>
            <li>
                <NavLink to="/resume" className="resume">resume</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    );
}