import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

/**
 * Separates a string into an array of words separated by commas and returns them as a list.
 *
 * @param {string} str - The input string to be separated into words.
 * @returns {JSX.Element} A React list component with the separated words.
 */
function separateWordsByComma(str) {
    var string = str.replace(/"/g, '');
    const words = string.split(',');
    return (
        <>
        {words.map((word, index) => (
            <div>{word}</div>
        ))}
        </>
        // <ul className='techList'>
        //     {words.map((word, index) => (
        //         <li key={index}>{word}</li>
        //     ))}
        // </ul>
    );
}

/**
 * ProjectCard is a React component that displays a card with project details.
 *
 * @param {string} title - The title of the project.
 * @param {string} description - A brief description of the project.
 * @param {string} buttonLink - The link to the full code of the project.
 * @param {string} imageSource - The source of the image for the project card.
 * @param {string} technologies - The technologies used in the project.
 *
 * @returns {JSX.Element} A React Card component with the provided project details.
 */
export default function ProjectCard({ title, description, buttonLink, imageSource, technologies, detailsPath }) {
    const isDetails = detailsPath === undefined ? false : true;
    const isLink = buttonLink === undefined ? false : true;
    return (
        <Card
            style={{ width: '20rem', marginBottom: '10px' }}
            bg='dark'
            text='light'
        >
            <Card.Img variant='top' src={imageSource} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>
                    <p>Technologies Used:</p>
                    
                    {separateWordsByComma(JSON.stringify(technologies))}
                    
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {isDetails ? ( 
                    <Link to={detailsPath}>
                        <Button variant="primary">More Details</Button>
                    </Link>
                ) : null}
                {isLink ? (
                    <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">See Full Code</Button>
                    </a>
                ) : null}
            </Card.Footer>
        </Card>
    );
}