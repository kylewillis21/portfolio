import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function HomeNavbar() {
    return (
        <nav className='homeNavbar'>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#edu'>Education</a></li>
                <li><a href='#skills'>Skills</a></li>
            </ul>
        </nav>
    )
}