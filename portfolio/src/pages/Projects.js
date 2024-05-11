import React from 'react'
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
    return (
        <div className='projectContainer'>
            <ProjectCard 
                title="Multiplayer Checkers"
                description="Project description"
                buttonLink="https://github.com/kylewillis21/MultiplayerCheckers"
            />
            <ProjectCard 
                title="Blog Project"
                description="ASP.NET"
                buttonLink="https://github.com/kylewillis21/BlogProject"
            />
            <ProjectCard 
                title="Monkey Typewriter"
                description="testing to see what would happen if we had a much longer description than the rest of the cards"
                buttonLink="https://github.com/kylewillis21/Monkey-Typewriter"
            />
        </div>
    ) 
 }