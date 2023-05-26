import React from 'react'
import  InstagramIcon  from '@material-ui/icons/Instagram'
import  LinkedInIcon  from '@material-ui/icons/LinkedIn'
import GithubIcon  from '@material-ui/icons/GitHub'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div>
            <div className='socialMedia'>
                <InstagramIcon />
                <a href='https://github.com/mohitbish'><GithubIcon /></a>
                <a href='https://www.linkedin.com/in/mohit-bishnoi-3a5025252/'><LinkedInIcon /></a>
            </div>
            <p>&copy; 2023 </p>
        </div>
    </div>
  )
}

export default Footer