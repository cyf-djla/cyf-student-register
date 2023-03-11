import React from 'react'
import Header from './Header';
import './About.css';

const About = () => {
  return (
    <div>
      <Header />
      {/* <div className="about__hero">
         <img
          src=".src/Images/Intro-to-Coding2.svg"
          className="about__hero-image"
          alt="hero"
        /> 
        <h1 className="mobile__title2">#We are here </h1>
      </div> */}
      <div className="about__hero-image">
        <h1 className="home__title">#We are here</h1>
      </div>
      <div className="about__us">
        
        
        <div className="about__ustext">
          <h1 className='header_text'>About us</h1>
          <p>
            <h5>-CODE YOUR FUTURE- </h5>
            Our Volunteers need to keep record of Trainee attendance,
            punctuality and behavior during classes. This allows volunteers to
            provide the best possible service for our trainees with teaching
            support, mentorship and covering expenses.
           
            <h5> OUR MISSION:</h5>
           Our vision is an application that'll allow students to
            digitally log into classes via mobile or laptop device easily and
            efficiently. A record of their participation then stored to a
            database, accessed by volunteers that'll support them in providing
            the best experience for trainees possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
