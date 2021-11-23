import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import RecipeCard from '../components/RecipeCard';

export default function RecipesGrid() {
    return (
        <Container>
            <Row className="my-4">
                <h3 className="text-center">Explore recipes from homecooks around the world!</h3>
            </Row>
            <Row className="my-4">
                <Col>
                    <RecipeCard/>
                </Col>
                <Col>
                    <RecipeCard/>
                </Col>
                <Col>
                    <RecipeCard/>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <RecipeCard/>
                </Col>
                <Col>
                    <RecipeCard/>
                </Col>
                <Col>
                    <RecipeCard/>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <RecipeCard/>
                </Col>
                <Col>
                    <RecipeCard/>
                </Col>
                <Col>
                    <RecipeCard/>
                </Col>
            </Row>
        </Container>
    )
}