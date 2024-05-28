import React from 'react'
import Fade from 'react-reveal/Fade'

import home from '../assets/home.json'
import aboutPic from '../assets/images/home/about.jpg'
import eduPic from '../assets/images/home/educationLogo.jpg'

export default function Home() {
   return (
      
      <div className='homeContainer'>
         <Fade duration='2000'>
            <div className='infoCard'>
               <div className="about">
                  <h1>About Me</h1>
                  <p>{home.pragraph}</p>
               </div>
               <img src={aboutPic} alt='Profile Photo' className='aboutPic'/>
            </div>
            <div className='infoCard'>
               <img src={eduPic} alt='education photo' className='aboutPic'/>
               
               <div className="about">
                  <h1 className='headerEdu'>Education</h1>
                  <p>{home.education.description}</p>
               </div>
            </div>
         </Fade>
      </div>
      
   )
}