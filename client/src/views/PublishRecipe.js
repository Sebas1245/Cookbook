import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RecipeForm from '../components/RecipeForm'
import ImageUpload from '../components/ImageUpload'
import MainNavbar from '../components/MainNavbar'
import { Link, useNavigate } from 'react-router-dom';

const PublishRecipe = () => {
    const navigate = useNavigate();
    const handleClickCancel = () => {
        navigate('/');
    }
    return (
        <div>
            <MainNavbar leftButtonText="Cancel" rightButtonText="Publish recipe" leftButtonAction={ () => handleClickCancel()} />
            <Container className="mt-3">
            <Row>
                <Col>
                    <h3>Let's get cooking!</h3>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <RecipeForm/>
                </Col>
                <Col md={6}>
                    <ImageUpload/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default PublishRecipe;