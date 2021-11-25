import Button from "react-bootstrap/Button";
import React from "react";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const RecipeCard = ({recipeId, title, author, imageSrc}) => {
    return (
        <Card border="secondary">
            <Card.Img variant="top" src={imageSrc} style={{objectFit: 'contain', height: '50vh'}} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>By <b>{author}</b></Card.Text>
                <div className="d-flex flex-row-reverse">
                    <Link to={`/recipes/${recipeId}`}>
                        <Button variant="primary">See more</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;