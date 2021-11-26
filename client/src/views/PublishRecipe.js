import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageUpload from '../components/ImageUpload'
import MainNavbar from '../components/MainNavbar'
import Button from 'react-bootstrap/Button'
import {postRecipe} from '../services/apiCalls'
import {useNavigate} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton'


const PublishRecipe = () => {
    const navigate = useNavigate();
    const [title, setTitleField] = useState("");
    const [ingredientField, setIngredientField] = useState("");
    const [stepField, setStepField] = useState("");
    const [category, setCategoryField] = useState("");
    const [description, setDescriptionField] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [image, setImage] = useState(undefined);
    const addIngredient = () => {
        if (ingredientField !== '') {
            setIngredients([...ingredients, ingredientField]);
            setIngredientField('');
        }
    }

    const addStep = () => {
        if (stepField !== ''){
            setSteps([...steps, stepField]);
            setStepField('');
        }
    }
    const handleTitleChange = (e) => {
        setTitleField(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategoryField(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescriptionField(e.target.value);
    }
    const createRecipe = async (e) => {
        e.preventDefault();
        try {
            console.log("Recipe info on component")
            console.log(title, ingredients, steps, image, category, description);
            const successfulCreatedRecipe = await postRecipe({title, ingredients, steps, image, category, description});
            if (successfulCreatedRecipe) {
                navigate('/');
            }
        } catch (error) {
            alert(error);
        }
    }
    const removeIngredient = (e) => {
        setIngredients(ingredients.filter((ingredient) => ingredient !== e.target.id))
    }
    const removeStep = (e) => {
        setSteps(steps.filter((step) => step !== e.target.id))
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
                        <div>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control placeholder="Recipe title" value={title}
                                    onChange={handleTitleChange} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={8}>
                                    <Form.Control id="ingredient-field" placeholder="New ingredient with its measurement" value={ingredientField} onChange={e => setIngredientField(e.target.value)} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Button onClick={addIngredient} variant="secondary"> Add ingredient </Button>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <ListGroup>
                                        {ingredients.map((ingredient, i) => 
                                        <ListGroup.Item key={`ingredient-${i}`}>
                                            <Row>
                                                <Col xs={10}>{ingredient}</Col>
                                                <Col><CloseButton id={`${ingredient}`} onClick={removeIngredient} /></Col>
                                            </Row>
                                        </ListGroup.Item>)
                                        }
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={8}>
                                    <Form.Control id="step-field" placeholder="New step" value={stepField} onChange={e => setStepField(e.target.value)} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Button onClick={addStep} variant="secondary"> Add step </Button>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <ListGroup>
                                        {steps.map((step, i) => 
                                        <ListGroup.Item key={`step-${i}`}>
                                            <Row>
                                                <Col xs={10}>{i + 1}. {step}</Col>
                                                <Col><CloseButton id={`${step}`} onClick={removeStep} /></Col>
                                            </Row>
                                        </ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control id="category-field" 
                                    placeholder="Assign a category" value={category} 
                                    onChange={handleCategoryChange} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control as="textarea" rows="5" id="category-field" 
                                    placeholder="Tell everyone a little more about the dish and it's history!" 
                                    value={description} onChange={handleDescriptionChange} />
                                </Col>
                            </Row>
                        </div>
                        </Col>
                        <Col md={6}>
                            <ImageUpload setFile={(file) => setImage(file)} />
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