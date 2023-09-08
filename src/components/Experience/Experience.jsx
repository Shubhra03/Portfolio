
import './Experience.css';
import React from 'react';
import ToggleWithIconsAndGithub from '../ToggleIcons/ToggleWithIconsAndGithub';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faGithub } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
   
  return (
    <section id="experience">
     <h1 className='intro'>Experiences</h1><br/>
    <div class="main">
   
            <div className="container">
                <ul>
                    <li>
                        <p className="heading">FrontEnd Developer <span>@IBM SkillsBuild </span></p>
                        <p >Developed and deployed VTube Video streaming site with intuitive search, Material-UI interface, and real-time RapidAPI
integration for diverse content. Delivers a familiar video experience with added engaging features.Website developed using
React JS, Material UI, Rapid API, and Netlify</p>
                        {/* <a href="">Read</a> */}
                        {/* <a href="#" className="read-more-icon" id="read-more-toggle"><i class="fas fa-arrow-right"></i></a> */}
                        <ToggleWithIconsAndGithub
        readMoreLink="/pageB"
        githubLink="https://github.com/your-profile-B"
      />
                        <span className="date">July 2023</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <p className="heading">Web Developer Intern <span>@Shoppeal Tech.</span></p>
                        <p> Developed Frontend projects based on client’s requirement usingHTML, CSS, JavaScript and Bootstrap</p>
                        <ToggleWithIconsAndGithub
        readMoreLink="/pageB"
        githubLink="https://github.com/your-profile-B"
      />
                        <span className="date">June 2023</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <p className="heading">Salesforce Developer Virtual Internship <span>@Smartbridge</span></p>
                        
                        <p>During the 8 Weeks period of Virtual Internship (May-July 2023),I have completed the some Salesforce Trailhead modules</p>
                        <ToggleWithIconsAndGithub
        readMoreLink="/pageB"
        githubLink="https://github.com/your-profile-B"
      />
                        <span className="date">July 2023</span>
                        <span className="circle"></span>
                    </li>
                   
                </ul>
            </div>
            </div>
    </section>
  )
}

export default Experience