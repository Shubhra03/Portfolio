import React from 'react'

import './About.css';



const About = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <h1 className="hello">Hello, Myself</h1>
        <span className='introName'>Shubhra Jyoti Sahoo</span><br/>
        <span className="introText">I'm a Website devloper.</span>

        <p className="introPara">I am a tech enthusiast, competitive programmer and web developer, constantly exploring new technologies and pushing the boundaries of what's possible . <a href="https://github.com/Shubhra03/" className='learn' href='https://github.com/shubhra03'>Learn More</a></p>
        <a
  href="https://drive.google.com/file/d/1g42yPD9OEK_3EqRsDwod4G-_fNIEu8-s/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  
>
  <button className="btn">Check Out My Resume!</button>
</a>
        </div>
        {/* <img src={profile} alt="profile" className="bg" /> */}
    </section>
  )
}

export default About;