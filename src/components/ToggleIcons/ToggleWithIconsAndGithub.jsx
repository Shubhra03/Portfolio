import React from 'react';
import './aqua.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ToggleGithubIcon = ({ readMore, githubLink }) => {
  return (
    <div>
      <a href={githubLink} className='aqua-icon'>
        <FontAwesomeIcon icon={faGithub} className='aqua-icon' />
      </a>
      <span className="icon-space" />
      <a href={readMore}className="website-icon">
        <FontAwesomeIcon icon={faGlobe} className="website-icon" />
      </a>
    </div>
  );
};

export default ToggleGithubIcon;
