// App.js

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Project/Projects';
import ContactForm from './components/Contact/ContactForm';
// Import your Navbar component

function App() {
  return (
   <>
    <Navbar />
  <About />
      <Intro />
      <Experience />
      <Projects />
      <ContactForm />
  </>
  );
}

export default App;
