// Navbar.js (Navbar component)

import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-router-dom
import logo from '../images/logo.ico';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopMenu">
        <Link  to="intro" className="desktopMenuItem">
          Home
        </Link>
        <Link to="about" className="desktopMenuItem">
          About
        </Link>
        <Link to="experience" className="desktopMenuItem">
          Experience
        </Link>
        <Link to='project' className="desktopMenuItem">
          Projects
        </Link>
        <Link to="contact" className="desktopMenuItem">
          Contacts
        </Link>
        <a
          href="https://drive.google.com/file/d/1PQ6KWEZ2elDJRWHEdxjvaaBkeRhWrFi6/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="desktopMenuItem"
        >
          <button className="desktopMenuBtn">Resume</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
