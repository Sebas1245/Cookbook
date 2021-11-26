import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'


const RecipeForm = ({setParentTitle, setParentIngredients, setParentSteps, setParentCategory, setParentDescription}) => {
    const [title, setTitleField] = useState("");
    const [ingredientField, setIngredientField] = useState("");
    const [stepField, setStepField] = useState("");
    const [category, setCategoryField] = useState("");
    const [description, setDescriptionField] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const addIngredient = () => {
        const newIngredientQty = document.getElementById('qty-field').value;
        const newIngredientGrams = document.getElementById('grams-field').value;
        if (newIngredientQty === "How much") {
            alert("Select a quantity")
            return;
        }
        if (newIngredientQty === "grams" && newIngredientGrams === 0) {
            alert('Set a quantity greater than 0 for grams');
            return;
        }
        if (newIngredientGrams > 0 && newIngredientQty !== "grams") {
            alert("Only use the number field when using grams as a unit");
            return;
        }
        if (newIngredientQty === 0 || ingredientField === "") {
            alert("You must add more information to the ingredient!")
            return;
        }
        let newIngredientString;
        if (newIngredientQty=== "grams")  {
            newIngredientString = newIngredientGrams +  ' grams of ' + ingredientField;
        }  else {
            newIngredientString = newIngredientQty === "N/A" ? ingredientField : newIngredientQty + ' of ' + ingredientField;
        }
        setIngredients([...ingredients, newIngredientString]);
        setIngredientField('');
        setParentIngredients(ingredients);
    }

    const addStep = () => {
        if (stepField !== ''){
            setSteps([...steps, stepField]);
            setStepField('');
            setParentSteps(steps);
        }
    }
    const handleTitleChange = (e) => {
        setTitleField(e.target.value);
        setParentTitle(title);
    }
    const handleCategoryChange = (e) => {
        setCategoryField(e.target.value);
        setParentCategory(category);
    }
    const handleDescriptionChange = (e) => {
        setDescriptionField(e.target.value);
        setParentDescription(description);
    }
    return (
        <div>
            <Row className="mb-3">
                <Col>
                    <Form.Control placeholder="Recipe title" value={title}
                    onChange={handleTitleChange} />
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
                        {ingredients.map((ingredient, i) => <ListGroup.Item key={`ingredient-${i}`}>{ingredient} </ListGroup.Item>)}
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
                        {steps.map((step, i) => <ListGroup.Item as="li" key={`step-${i}`}>{step}</ListGroup.Item>)}
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
    )
}

export default RecipeForm;