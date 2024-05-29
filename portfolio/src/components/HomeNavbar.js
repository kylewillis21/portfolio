import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function HomeNavbar() {
    return (
        <nav className='homeNavbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}