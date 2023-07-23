import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    return (
    <nav>
        <ul className= "nav-bar">
             <li>
                <NavLink style={({isActive}) => {return {color: isActive?'red':''}}}
                to="/" className="home">Home</NavLink> 
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'red':''}}}
                to="/about-me" className="about-me">About Me</NavLink> 
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'red':''}}}
                to="/showcase" className="showcase">Showcase</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'red':''}}}
                to="/resume" className="resume">Resume</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'red':''}}}
                to="/contact" className="contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    );
}