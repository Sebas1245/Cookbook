import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'


export default function RecipeInfo({title, imageSrc, ingredients, steps}) {
    return (
        <Container className="mt-3" fluid>
            <Row>
                <Col>
                    <h3>{title}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Ingredients </h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup variant="flush">
                    {ingredients.map((ingredient, i) => <ListGroup.Item key={`ingredient-${i}`}>{ingredient}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
                <Col className="text-center">
                    <Image
                    style={{height: '65vh'}} 
                    id="recipe-image" 
                    src={imageSrc} 
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
                    <ListGroup variant="flush" as="ol" numbered>
                        {steps.map((step, i) => <ListGroup.Item as="li" key={`step-${i}`}>{step}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}