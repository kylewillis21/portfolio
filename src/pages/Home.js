import React from 'react'
import Fade from 'react-reveal/Fade'
import { useMediaQuery } from 'react-responsive';

import home from '../assets/home.json'
import aboutPic from '../assets/images/home/about.jpg'
import eduPic from '../assets/images/home/educationLogo.jpg'
import dotNet from '../assets/images/home/skills/dotNet.png'
import reactImg from '../assets/images/home/skills/react.png'
import git from '../assets/images/home/skills/git.jpg'
import cpp from '../assets/images/home/skills/c++.png'
import js from '../assets/images/home/skills/js.png'
import py from '../assets/images/home/skills/python.png'
import vscode from '../assets/images/home/skills/vscode.jpg'
import node from '../assets/images/home/skills/node.png'

import HomeNavbar from '../components/HomeNavbar'


export default function Home() {
   const isDesktop = useMediaQuery({ minWidth: 800 });

   return (
      <div className='horzContainer'>
         {isDesktop && <HomeNavbar />}
         <div className='homeContainer'>
            <Fade duration='1500'>
               {/* about me section */}
               <div className='infoCard'>
                  <div className="about">
                     <h1 id='about'>About Me</h1>
                     <p>{home.pragraph}</p>
                  </div>
                  <img src={aboutPic} alt='Profile Photo'/>
               </div>
               {/* end of about me section*/}
               
               {/* education section */}
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
               {/* end of education section */}

               {/* skills section */}
               <div className='infoCard'>
                  <div className='about'>
                     <h1 id='skills'>Skills</h1>
                     <p>{home.skills}</p>
                     <div className='courseList'>
                        <ul>
                           <p>Languages</p> 
                           <li>C++</li>
                           <li>C#</li> 
                           <li>JavaScript</li>  
                           <li>Rust</li>  
                           <li>Python</li>
                           <li>SQL</li> 
                        </ul>
                        <ul>
                           <p>Frameworks</p>
                           <li>React</li>
                           <li>React Native</li>
                           <li>.NET Core</li>
                           <li>ASP.NET</li>
                        </ul>
                        <ul>
                           <p>Misc.</p>
                           <li>MVC</li>
                           <li>Unit Testing</li>
                           <li>Visual Studio</li>
                           <li>Visual Studio Code</li>
                           <li>Git</li>
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>Node.js</li>
                        </ul>
                        <ul>
                           <p>Soft Skills</p>
                           <li>Communication</li>
                           <li>Critical Thinking</li>
                           <li>Teamwork</li>
                           <li>Professionalism</li>
                        </ul>
                     </div>
                  </div>
                  <div className='imageSkills'>
                     <img src={dotNet}/>
                     <img src={reactImg}/>
                     <img src={git}/>
                     <img src={cpp}/>
                     <img src={js}/>
                     <img src={py}/>
                     <img src={vscode}/>
                     <img src={node}/>
                  </div>
               </div>
               {/* end of skills section */}
            </Fade>
         </div>
      </div>
      
   )
}