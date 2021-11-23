import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import MainNavbar from '../components/MainNavbar'
import RecipeCard from '../components/RecipeCard';
import { Link, useNavigate } from 'react-router-dom';


const Homepage = ({loggedIn}) => {
    // const [recipe, setRecipe] = useState([]);
    const navigate = useNavigate();
    const redirectTo = (path) => {
        console.log('redirecting to ', path);
        navigate(path);
    }
    const leftButtonText = loggedIn ? "Logout" : "Login";
    const rightButtonText = loggedIn ? "Add a recipe" : "Register";
    const leftButtonPath = loggedIn ? redirectTo('/') : redirectTo('/login');
    const leftButtonoParam = loggedIn ? redirectTo('/new_recipe') : redirectTo('/register')
    // const buildRecipeGrid = (recipes) => {
        
    // }
    
    return (
        <div>
            <MainNavbar 
            leftButtonText={leftButtonText} rightButtonText={rightButtonText}
            leftButtonAction={() => loggedIn ? redirectTo('/') : redirectTo('/login')} 
            rightButtonAction={() => loggedIn ? redirectTo('/new_recipe') : redirectTo('/register')} />
            
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
        </div>
    )
} 

export default Homepage;