import React, {useState, useEffect} from 'react'
import MainNavbar from '../components/MainNavbar'
import Comments from '../components/Comments'
import RecipeInfo from '../components/RecipeInfo'
import { useParams } from 'react-router-dom'
import { getCommentsForRecipe, getOneRecipe } from '../services/apiCalls'


export default function RecipeDetail() {
    const params = useParams()
    console.log(params);
    const [recipe, setRecipe] = useState({
        title: '',
        photoRef: '',
        ingredients: [],
        steps: []
    })
    const [comments, setComments] = useState([]);
    useEffect( () => {
        const fetchRecipe = async () => {
            console.log(params)
            const recipe = await getOneRecipe(params.recipeId);
            setRecipe(recipe);
            const comments = await getCommentsForRecipe(params.recipeId);
            setComments(comments);
        }
        fetchRecipe()
    }, [params])
    return (
        <div>
            <MainNavbar />
            <RecipeInfo title={recipe.title} 
            imageSrc={recipe.photoRef} 
            ingredients={recipe.ingredients} 
            steps={recipe.steps} />
            <Comments comments={comments} />
        </div>
    )
}