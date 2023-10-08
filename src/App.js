// App.js

import React from 'react';
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar';
import NavBar from './components/Navbar/Navbar';
// import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Project/Projects';

import ContactForm from './components/Contact/ContactForm';
// Import your Navbar component

function App() {
  return (
   <>
    <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            {/* <Route path="/" element={<Intro />} /> */}
            <Route path="/" element={<About />} />
           
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
  {/* <About />

      <Intro />
      <Experience />
      <Projects />
      <ContactForm /> */}
      </Router>
  </>
  );
}

export default App;
