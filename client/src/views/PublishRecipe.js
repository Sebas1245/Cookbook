import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RecipeForm from '../components/RecipeForm'
import ImageUpload from '../components/ImageUpload'
import MainNavbar from '../components/MainNavbar'
import Button from 'react-bootstrap/Button'
import {postRecipe} from '../services/apiCalls'
import {useNavigate} from 'react-router-dom'


const PublishRecipe = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        ingredients: [],
        steps: [], 
        category: '',
        description: '',
        image: undefined
    });
    const createRecipe = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const successfulCreatedRecipe = await postRecipe(formData);
            if (successfulCreatedRecipe) {
                navigate('/');
            }
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div>
            <MainNavbar />
            <Container className="mt-3">
                <form onSubmit={createRecipe}>
                    <Row>
                        <Col>
                            <h3>Let's get cooking!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <RecipeForm 
                            setParentTitle={(value) => setFormData({...formData, 'title': value})}
                            setParentIngredients={(value) => setFormData({...formData, 'ingredients': value})}
                            setParentSteps={(value) => setFormData({...formData, 'steps': value})}
                            setParentCategory={(value) => setFormData({...formData, 'category': value})}
                            setParentDescription={(value) => setFormData({...formData, 'description': value})}
                            />
                        </Col>
                        <Col md={6}>
                            <ImageUpload setFile={(file) => setFormData({...formData, 'image': file})} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-end">
                            <Button type="submit" variant="secondary">
                                Create recipe
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    )
}

export default PublishRecipe;