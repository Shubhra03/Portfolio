

// import React from 'react';
// import { Link } from 'react-scroll'; // Import Link from react-router-dom
// import logo from '../images/logo.ico';
// import './Navbar.css'
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <img src={logo} alt="" className="logo" />
//       <div className="desktopMenu">
//         <Link  to="intro" className="desktopMenuItem">
//           Home
//         </Link>
//         <Link to="about" className="desktopMenuItem">
//           About
//         </Link>
//         <Link to="experience" className="desktopMenuItem">
//           Experience
//         </Link>
//         <Link to='project' className="desktopMenuItem">
//           Projects
//         </Link>
//         <Link to="contact" className="desktopMenuItem">
//           Contacts
//         </Link>
//         <a
//           href="https://drive.google.com/file/d/1PQ6KWEZ2elDJRWHEdxjvaaBkeRhWrFi6/view?usp=drive_link"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="desktopMenuItem"
//         >
//           <button className="desktopMenuBtn">Resume</button>
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../images/logo.ico';

import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           
            {/* <i className="fas fa-code"></i> */}
            <span >
            <img src={logo} alt="" className="icon" />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/experience"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Experience
              </NavLink>
            </li>
          
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
              </NavLink>
            </li>
            <li className="nav-item"> 
            <a
          href="https://drive.google.com/file/d/1g42yPD9OEK_3EqRsDwod4G-_fNIEu8-s/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="desktopMenuItem"
        >
          <button className="desktopMenuBtn">Resume</button>
        </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

