import React from 'react';
import '../Home/Home.css'; // Assuming the CSS file is shared
import './About.css';
import JonahHeadshot from "./jonah-headshot.webp";
import CalebHeadshot from "./caleb-headshot.webp";
import KorusHeadshot from "./korus-headshot.webp";

function About() {
  return (
    <div className='about pagecontainer'>
      <h1 className="about title">About Us</h1>
      <p className='about blurb'>This project began in the summer of 2024 with the initial goal of creating a platform to centralize the educational content that Mrs. Korus had produced for her AP Art History classes. Jonah took AP Art History his senior year of Highschool and really enjoyed the content and teaching style that Mrs. Korus provided. He had the idea for this site as an aid for in class instruction. Jonah shared the idea with Caleb, a fellow Computer Science Major, and Caleb was immediately on board with the mission. The two begun planning and creating design mockups and pitched the idea to Mrs. Korus who loved it. Over the summer they developed a basic site and they plan on adding a plethora of features over the school year.</p>
      <div className='team-cards'>
        <div className='team-card'>
          <img src={KorusHeadshot} alt='Mrs. Korus' className='headshot' />
          <h2>Mrs. Korus</h2>
          <p className='caption'>The passionate AP Art History teacher at North Central High School who inspires curiosity and a love for art in her students.</p>
        </div>
        <div className='team-card'>
          <img src={CalebHeadshot} alt='Caleb Stewart' className='headshot' />
          <h2>Caleb Stewart</h2>
          <p className='caption'>A computer science whiz studying at Eastern Washington University. Caleb, a proud alum of Mrs. Korus' class, graduated in 2021 and brings his tech expertise to our team.</p>
        </div>
        <div className='team-card'>
          <img src={JonahHeadshot} alt='Jonah Aden' className='headshot' />
          <h2>Jonah Aden</h2>
          <p className='caption'>Another computer science major, currently at Columbia University. Jonah, also a former student of Mrs. Korus, graduated in 2022.</p>
        </div>
      </div>
      <p className='about blurb'>We are thrilled to bring you an enriching experience, blending art history with cutting-edge technology.</p>
      <p className='about blurb'>
        Have questions or feedback? Reach out to us at:
        <strong><a href="mailto:smartartspokane@gmail.com">smartartspokane@gmail.com</a></strong>
      </p>
      <a href="https://github.com/adenjonah/APAH" target="_blank" rel="noopener noreferrer" className="github-link">
        <button className="github-button">View on GitHub</button>
      </a>
    </div>
  );
}

export default About;