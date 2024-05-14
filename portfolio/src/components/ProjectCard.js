import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
export default function ProjectCard({ title, description, buttonLink, imageSource, technologies }) {
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
                <Card.Text>Technologies Used: {technologies}</Card.Text>
            </Card.Body>
            <Card.Footer style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">See Full Code</Button>
                </a>
            </Card.Footer>
        </Card>
    );
}