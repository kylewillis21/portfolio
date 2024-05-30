import React from 'react'
import Fade from 'react-reveal/Fade'
import { useEffect, useState } from 'react'

import home from '../assets/home.json'
import aboutPic from '../assets/images/home/about.jpg'
import eduPic from '../assets/images/home/educationLogo.jpg'
import HomeNavbar from '../components/HomeNavbar'

export default function Home() {
   



   return (
      <div className='horzContainer'>
         <HomeNavbar />
         <div className='homeContainer'>
            <Fade duration='1500'>

               <div className='infoCard'>
                  <div className="about">
                     <h1 id='about'>About Me</h1>
                     <p>{home.pragraph}</p>
                  </div>
                  <img src={aboutPic} alt='Profile Photo'/>
               </div>

               <div className='infoCard'>
                  <img src={eduPic} alt='education photo'/>
                  <div className="about">
                     <h1 className='headerEdu' id='edu'>Education</h1>
                     <p>{home.education.description}</p>
                     <p>Graduation Date: {home.education.graduation}</p>
                     <p>Relevant Course Work</p>
                     <div className='courseList'>
                        <ul>
                           <li>Software Design and Development</li>
                           <li>Distributed and Parallel Computing</li>
                           <li>Database Systems</li>
                           <li>Software Engineering Tools and Practices</li>
                           <li>Design and Analysis of Algorithms</li>
                        </ul>
                        <ul>
                           <li>Formal Languages and Compilers</li>
                           <li>Data Mining</li>
                           <li>Data Structures</li>
                           <li>Operating Systems</li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className='infoCard'>
                  <div className='about'>
                     <h1 id='skills'>Skills</h1>
                     <p>This is the section where I will start to list the skills I have gained over the course of my career</p>
                  </div>
               </div>
            </Fade>
         </div>
      </div>
      
   )
}