import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../Styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Mohit Bishnoi</h2>
        <div className='prompt'>
          <p>
            I am a passionate full stack developer with a strong background in both front-end and back-end technologies. Apart from my 
            technical skills, I am an avid gym enthusiast and enjoy exploring new places through travel.
          </p> 
          <a href="mailto:bishnoi.mohit@icloud.com"><EmailIcon /></a>
          <a href='https://github.com/mohitbish'><GithubIcon /></a>
          <a href='https://www.linkedin.com/in/mohit-bishnoi-3a5025252/'><LinkedInIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2> 
              <ul className='innerlist'>
                <l1>ReactJS</l1>
                <l1>Angular</l1>
                <l1>HTML</l1>
                <l1>CSS</l1>
                <l1>NPM</l1>
                <l1>Jquery</l1>
                <l1>BootStrap</l1>
              </ul>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <ul  className='innerlist'>
                <l1>NodeJS</l1>
                <l1>Laravel</l1>
                <l1>MySQL</l1>
                <l1>MongoDB</l1>
                <l1>PHP</l1>
              </ul>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <ul  className='innerlist'>
                <l1>JavaScript</l1>
                <l1>Swift</l1>
                <l1>Java</l1>
                <l1>Python</l1>
                <l1>TypeScript</l1>
                <l1> C++</l1>
              </ul>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home