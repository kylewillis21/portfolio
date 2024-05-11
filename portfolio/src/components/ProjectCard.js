import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProjectCard({ title, description, buttonLink, imageSource, technologies }) {
    return (
    <Card
        style={{width: '20rem'}}
    >
        <Card.Img variant='top' src={imageSource} />
        <Card.Body>   
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Technologies Used: {technologies}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">See Full Code</Button>
            </a>
        </Card.Footer>
    </Card>
    );
}