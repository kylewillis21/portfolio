import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
    const isDesktop = useMediaQuery({ minWidth: 800 });

    const handleDownload = async (e) => {
        e.preventDefault();
        const response = await fetch('https://portfoliobackendkyle-f371dc3b0c48.herokuapp.com/download-resume', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        });

        if (response.ok) {
            const blob = await response.blob(); 
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'ResumeKyleWillis.pdf');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } else {
            console.error('Failed to download file');
        }
    }

    return (
        <nav className="nav">
            {/* <Link to="/" className="site-title">Site Name</Link> */}
            {isDesktop && <div></div>}
            <ul>
                <CustomLink to="/portfolio">Home</CustomLink>
                <CustomLink to="/portfolio/projects">Projects</CustomLink>
                <CustomLink to="/portfolio/contact">Contact</CustomLink>
                <li><a href='#' onClick={handleDownload}>Resume</a></li>             
            </ul> 
        </nav>
    );
}



function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}