import React from 'react'
import profile from '../images/profile.jpeg';
import './Intro.css'

const Intro = () => {
  return (
    <section id='about'>
    <h1 className='intro'>About me</h1><br/>
    <div className='content-container'>
    <div className='first'>
        <span><br/>I am a Tech enthusiast and a software developer with experience as a IBM skillsbuild program Intern. Have also worked as a Frontend Developer Intern @Shoppeal Tech. 
            Pursuing Bachelor's in Information Technology from Odisha University of Technology and Research, Bhubaneswar.I currently hold a CGPA of 9.67, 
            reflecting my dedication to studies.I'm skilled in Core Java programming, which I've used in various projects. I have done many projects, 
            where I've worked with React JS , Node JS , Express ,databases like SQL, MongoDB, and Firebase.
              One of my standout projects is "TripIt," a virtual travel advice platform.
              Competitive programming is my passion. I've achieved a CodeChef global rating of 1596, showcasing my commitment to improvement.
             Excited to connect with professionals and contribute to innovative projects. Also, I'm interested in music. 
             Let's connect and together, we can create remarkable solutions that shape the future of technology.</span>
        
    </div>
    <div className='second'>
    <div className="cutout-container">

        <img src={profile} className='profile' alt="" />
        </div>
        </div>
</div>

    </section>
  )
}

export default Intro