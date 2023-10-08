import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './ContactForm.css'; // Import your CSS file

function ContactForm() {
  return(
    <section id="contact">
      <div className="social-icons">
        <h1 className='find'>FIND ME ON</h1>
        <p className='free'>Feel Free to connect with me</p>
      <a href="mailto:shubhrajyotisahoo03@example.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        <a href="https://github.com/Shubhra03/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/shubhra-jyoti-sahoo-a56439203/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      </section>
  );
}

export default ContactForm;
