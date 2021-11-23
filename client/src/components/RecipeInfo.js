import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import { useParams } from "react-router-dom";


export default function RecipeInfo() {
    const params = useParams();
    const dummySteps = [
        'Step 1',
        'Step 2',
        'Step 3',
        'Step 4',
        'Step 5',
        'Step 6',
    ]
    const dummyIngedients = [
        'Ingredient 1',
        'Ingredient 2',
        'Ingredient 3',

    ]
    return (
        <Container className="mt-3" fluid>
            <Row>
                <Col>
                    <h3>Title of recipe {params.recipeId}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Ingredients </h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                    {dummyIngedients.map((ingredient, i) => <ListGroup.Item key={`ingredient-${i}`}>{ingredient}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
                <Col>
                    <Image
                    style={{maxHeight: "100%", maxWidth: "100%"}} 
                    id="recipe-image" 
                    src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltc1f5d681043ec5e0/5de0ba2ef1b4be78076c2a6a/Hot_meal_header_copy.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232" 
                    />
                </Col>
            <Row>
                <Col>
                    <h4>Steps to follow: </h4>
                </Col>
            </Row>
            </Row>
            <Row className="mt-2">
                <Col xs={12}>
                    <ListGroup>
                        {dummySteps.map((step, i) => <ListGroup.Item key={`step-${i}`}>{step}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}