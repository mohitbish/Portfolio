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
            <div class="grid-container">
              <div class="grid-item">ReactJS</div>
              <div class="grid-item">Angular</div>
              <div class="grid-item">HTML</div>
              <div class="grid-item">Css</div>
              <div class="grid-item">Jquery</div>
              <div class="grid-item">Bootstrap</div>
            </div>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <div class="grid-container">
              <div class="grid-item">NodeJS</div>
              <div class="grid-item">Laravel</div>
              <div class="grid-item">MySQL</div>
              <div class="grid-item">MongoDB</div>
              <div class="grid-item">PHP</div>
            </div>
            
          </li>
          <li className="item">
            <h2>Languages</h2>
            <div class="grid-container">
              <div class="grid-item">JavaScript</div>
              <div class="grid-item">Swift</div>
              <div class="grid-item">Python</div>
              <div class="grid-item">TypeScript</div>
              <div class="grid-item">Java</div>
              <div class="grid-item">C++</div>
            </div>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home