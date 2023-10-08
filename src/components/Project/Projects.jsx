import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/travel.png';
import chess from '../images/blogapp.png';
import shopping from '../images/vtube.png';
import travel from '../images/spam.png';
import definition from '../images/university.png';
import memes from '../images/todo.png';
// import superhero from '../images/blog.png';
// import monorepo from '../images/blog.png';
// import challenges from '../images/blog.png';
import github from '../images/github.png';

// Web projects
const cardItem = [
  {
    link: 'https://github.com/Shubhra03/https---github.com-Shubhra03-TripIt',
    title: 'GlobeGuide',
    techStack: 'Tech Stack: React JS,Rapid Api,Google map api,material ui',
    desc: 'Users explore nearby places like restaurants, hotels, and attractions through scrollable cards while enjoying features like speech recognition , geolocation, fetching data from API based on location and filters.',
    image: bookheap,
    color: '#a9def9',
    githubLink: 'https://github.com/Shubhra03/https---github.com-Shubhra03-TripIt'
  },
  {
    link: 'https://blog-website-vercel-five.vercel.app/',
    title: 'BlogHorizon',
    techStack: 'Tech Stack: MERN',
    desc: 'This is a blogging website enables verified users to create, read and update blogs with images and titles. ',
    image: chess,
    color: '#C1A4AA',
    githubLink: 'https://github.com/Shubhra03/Blog-Website-vercel'
  },
  {
    link: 'https://vtubevideochannel.netlify.app/',
    title: 'vtube',
    techStack: 'Tech Stack:React JS',
    desc: 'VTube Video streaming site with intuitive search, Material-UI interface, real-time RapidAPI integration, and engaging features for diverse content.',
    image: shopping,
    color: '#f3e4f1',
    githubLink:
      'https://github.com/Shubhra03/Vtube-clone'
  },
  {
    link: '',
    title: 'Spam Email classifier',
    techStack: 'Tech Stack-Machine Learning',
    desc: 'This is a website that used to predict whether the email or text is spam or not.',
    image: travel,
    color: '#d5ebda',
    githubLink:
      'https://github.com/Shubhra03/Spam-Email-Prediction'
  },
  {
    link: '',
    title: 'University management system',
    techStack: 'Tech Stack- MERN Stack, Mapbox',
    desc: 'A desktop application for university management, facilitating user login to access a centralized database for adding, viewing,and updating student and faculty information.',
    image: definition,
    color: '#EEA47F',
    githubLink:
      'https://github.com/Shubhra03/University-Management-System'
  },
  {
    link: 'https://shubhra03.github.io/ShoppealTech_TodoList/ ',
    title: 'Todo List',
    techStack: 'Tech Stack- Html,css,js',
    desc: 'To keep track of daily activity',
    image: memes,
    color: '#89ABE3',
    githubLink: 'https://github.com/Shubhra03/ShoppealTech_TodoList'
  }
  
];

export default function Projects() {
    const getProjectCard = (cardItem) => {
      return (
        <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45} key={cardItem.title}>
          <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
            <a href={cardItem.link} className={classes.card} target='_blank' rel="noopener noreferrer">
              <img src={cardItem.image} className={classes.card__image} alt='' />
            </a>
            <div
              onClick={() => {
                window.open(cardItem.githubLink, '_blank');
              }}
              className={classes.card__title__container}
            >
              <h3 className={classes.card__title}>{cardItem.title}</h3>
              <p className={classes.card_desc}>{cardItem.desc}</p>
              <img src={github} className={classes.card__title__img} alt='GitHub' />
            </div>
          </li>
        </Tilt>
      );
    };
  
    return (
      <section id="project">
      <div className={classes.box} id='projects'>
        {/* <span className={classes.head}>MY WORK</span> */}
        {/* <h1 className='intro'>Projects</h1><br/> */}
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
      </div>
      </section>
    );
  }