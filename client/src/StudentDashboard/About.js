import React from 'react'
import Header from './Header';
const About = () => {
  return (
    <div>
      <Header />
      <div className="about__hero">
        {/* <img
          src=".src/Images/Intro-to-Coding2.svg"
          className="about__hero-image"
          alt="hero"
        /> */}
        <h1 className="mobile__title2">#We are here </h1>
      </div>
      <div className="about__us">
        <h1>ABOUT US</h1>
        <p>
          CODE YOUR FUTURE <br /> need to keep record of Trainee attendance,
          punctuality and behavior during classes. This allows volunteers to
          provide the best possible service for trainees, with expense and
          teaching support, and mentorship.
          <br />
          <br />
          <b> OUR MISSION:</b>
          <br /> Our vision is an application that'll allow students to
          digitally log into classes via mobile or laptop device easily and
          efficiently. Their participation then stored to a database, accessed
          by volunteers that'll support them in providing the best experience
          for trainees possible.
        </p>
      </div>
    </div>
  );
}

export default About
