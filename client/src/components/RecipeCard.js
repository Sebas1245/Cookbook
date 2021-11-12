import Button from "react-bootstrap/Button";
import React from "react";
import Card from 'react-bootstrap/Card'

const RecipeCard = () => {
    return (
        <Card border="secondary">
            <Card.Img variant="top" src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltc1f5d681043ec5e0/5de0ba2ef1b4be78076c2a6a/Hot_meal_header_copy.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232" />
            <Card.Body>
                <Card.Title>Recipe Title</Card.Title>
                <Card.Text>Author</Card.Text>
                <div className="d-flex flex-row-reverse">
                    <Button variant="primary">See more</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;