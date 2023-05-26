import React from 'react'
import pdf from '../assets/RESUME.pdf'
import '../Styles/Resume.css'
function Resume() {
  return (
    <div>
        <iframe className= "mypdf" src={pdf}></iframe>
    </div>
  )
}

export default Resume