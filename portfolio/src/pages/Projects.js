import React from 'react'
import ProjectCard from "../components/ProjectCard"
import checkers from "../assets/images/checkers.jpg"
import blog from "../assets/images/blogProject.jpg"
import monkeys from "../assets/images/typewriterMonkeys.jpg"
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
            />
            <ProjectCard 
                imageSource={blog}
                title={projectsData.blogproject.title}
                description={projectsData.blogproject.description}
                buttonLink={projectsData.blogproject.link}
                technologies={projectsData.blogproject.technologies}
            />
            <ProjectCard 
                imageSource={monkeys}
                title={projectsData.monkeytypewriter.title}
                description={projectsData.monkeytypewriter.description}
                buttonLink={projectsData.monkeytypewriter.link}
                technologies={projectsData.monkeytypewriter.technologies}
                detailsPath={'/projects/MonkeyType'}
            />
            </div>
        </div>
    ) 
 }