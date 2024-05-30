import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function HomeNavbar() {
    return (
        <nav className='homeNavbar'>
            <ul>
                <a href='#'><li>About</li></a>
                <a href='#edu'><li>Education</li></a>
                <a href='#skills'><li>Skills</li></a>
            </ul>
        </nav>
    )
}