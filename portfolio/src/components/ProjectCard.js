import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProjectCard({ title, description, buttonLink }) {
    return (
    <Card
        style={{width: '20rem'}}
    >
        <Card.Body>   
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">See Code</Button>
            </a>
        </Card.Footer>
    </Card>
    );
}