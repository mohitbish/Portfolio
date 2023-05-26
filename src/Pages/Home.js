import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../Styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Mohit</h2>
        <div className='prompt'>
          <p>Software developer</p> 
          <a href="mailto:bishnoi.mohit@icloud.com"><EmailIcon /></a>
          <a href='https://github.com/mohitbish'><GithubIcon /></a>
          <a href='https://www.linkedin.com/in/mohit-bishnoi-3a5025252/'><LinkedInIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, NPM, Ionic, BootStrap,
              MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Laravel, Java Spring, MySQL, MongoDB, PHP
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Swift, Java, Python, C++, TypeScript </span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home