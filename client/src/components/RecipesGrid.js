import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import RecipeCard from '../components/RecipeCard';
import { getAllRecipes } from '../services/apiCalls';

export default function RecipesGrid() {
    const [recipes, setRecipes] = useState([])
    useEffect( () => {
        const fetchRecipes = async () => {
            const allRecipes =  await getAllRecipes();
            setRecipes(allRecipes)
        }
        fetchRecipes()
    }, [])

    return (
        <Container>
            <Row className="my-4">
                <h3 className="text-center">Explore recipes from homecooks around the world!</h3>
            </Row>
            <Row className="my-4">
            {
                recipes.map((recipe, index) => {
                    return (
                        <Col className="my-3" xs={4}>
                            <RecipeCard 
                            recipeId={recipe._id}
                            title={recipe.title} 
                            author={recipe.author.username} 
                            imageSrc={recipe.photoRef} />
                        </Col>
                    )
                })
            }
            </Row>
        </Container>
    )
}