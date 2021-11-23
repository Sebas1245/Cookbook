import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'


const RecipeForm = () => {
    const [ingredientField, setIngredientField] = useState("");
    const [stepField, setStepField] = useState("");
    const [categoryField, setCategoryField] = useState("");
    const [descriptionField, setDescriptionField] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const addIngredient = () => {
        const newIngredientQty = document.getElementById('qty-field').value;
        const newIngredientGrams = document.getElementById('grams-field').value;
        let newIngredientString;
        if (newIngredientQty=== "grams")  {
            newIngredientString = newIngredientGrams +  ' grams of ' + ingredientField;
        }  else {
            newIngredientString = newIngredientQty === "N/A" ? ingredientField : newIngredientQty + ' of ' + ingredientField;
        }
        setIngredients([...ingredients, newIngredientString]);
        setIngredientField('');
        
    }

    const addStep = () => {
        setSteps([...steps, stepField]);
        setStepField('');
    }
    return (
        <Form>
            <Row className="mb-3">
                <Col>
                    <Form.Control placeholder="Recipe title" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Control id="ingredient-field" placeholder="New ingredient" value={ingredientField} onChange={e => setIngredientField(e.target.value)} />
                </Col>
                <Col>
                    <Form.Control id="grams-field" type="number" min="0" />
                </Col>
                <Col>
                    <Form.Select id="qty-field" aria-label="Default select example">
                        <option>How much</option>
                        <option>N/A</option>
                        <option>grams</option>
                        <option value="Pinch">Pinch</option>
                        <option value="1 tablespoon">1 tablespoon</option>
                        <option value="1 fluid oz.">1 fluid oz.</option>
                        <option value="1/4 cup">1/4 cup</option>
                        <option value="1/3 cup">1/3 cup</option>
                        <option value="3/4 cup">3/4 cup</option>
                        <option value="1 cup">1 cup</option>
                        <option value="2 cups">2 cups</option>
                        <option value="1 quart or 32 fluid oz.">1 quart or 32 fluid oz.</option>
                        <option value="4 quarts or a gallon">4 quarts or a gallon</option>
                    </Form.Select>
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
                        {ingredients.map((ingredient, i) => <ListGroup.Item key={`ingredient-${i}`}>{ingredient}</ListGroup.Item>)}
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
                    <ListGroup as="ol" numbered>
                        {steps.map((step, i) => <ListGroup.Item as="li" key={`ingredient-${i}`}>{step}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Control id="category-field" placeholder="Assign a category" value={categoryField} onChange={e => setCategoryField(e.target.value)} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Control as="textarea" rows="5" id="category-field" placeholder="Tell everyone a little more about the dish and it's history!" value={descriptionField} onChange={e => setDescriptionField(e.target.value)} />
                </Col>
            </Row>
        </Form>
    )
}

export default RecipeForm;