import React from 'react'

import ProjectCard from "../components/ProjectCard"
import checkers from "../assets/images/projects/checkers.jpg"
import blog from "../assets/images/projects/blogProject.jpg"
import monkeys from "../assets/images/projects/typewriterMonkeys.jpg"
import player from "../assets/images/projects/playerNeeded.jpg"
import projectsData from "../assets/projectdescriptions/projects.json"

export default function Projects() {
    return (
        <div className='projectContainer'>
            <div className='project'>  
                <ProjectCard 
                    imageSource={checkers}
                    title={projectsData.checkers.title}
                    description={projectsData.checkers.description}
                    buttonLink={projectsData.checkers.link}
                    technologies={projectsData.checkers.technologies}
                    detailsPath={'/portfolio/projects/Checkers'}
                />
                <ProjectCard 
                    imageSource={blog}
                    title={projectsData.blogproject.title}
                    description={projectsData.blogproject.description}
                    buttonLink={projectsData.blogproject.link}
                    technologies={projectsData.blogproject.technologies}
                    detailsPath={'/portfolio/projects/Blog'}
                />
                <ProjectCard 
                    imageSource={monkeys}
                    title={projectsData.monkeytypewriter.title}
                    description={projectsData.monkeytypewriter.description}
                    buttonLink={projectsData.monkeytypewriter.link}
                    technologies={projectsData.monkeytypewriter.technologies}
                    detailsPath={'/portfolio/projects/MonkeyType'}
                />
                <ProjectCard
                    imageSource={player}
                    title={projectsData.playerneeded.title}
                    description={projectsData.playerneeded.description}
                    technologies={projectsData.playerneeded.technologies}
                />
            </div>
        </div>
    ) 
 }