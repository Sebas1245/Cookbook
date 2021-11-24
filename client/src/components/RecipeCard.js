import Button from "react-bootstrap/Button";
import React from "react";
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({recipeId, title, author, imageSrc}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/recipes/' + recipeId)
    }
    return (
        <Card border="secondary">
            <Card.Img variant="top" src={imageSrc} style={{objectFit: 'contain', height: '50vh'}} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>By <b>{author}</b></Card.Text>
                <div className="d-flex flex-row-reverse">
                    <Button onClick={handleClick} variant="primary">See more</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;