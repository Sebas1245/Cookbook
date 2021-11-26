import React, {useState, useEffect} from 'react'
import MainNavbar from '../components/MainNavbar'
import Comments from '../components/Comments'
import RecipeInfo from '../components/RecipeInfo'
import { useParams } from 'react-router-dom'
import {  getOneRecipe } from '../services/apiCalls'


export default function RecipeDetail() {
    const params = useParams()
    const [recipe, setRecipe] = useState({
        title: '',
        photoRef: '',
        ingredients: [],
        steps: []
    })
    useEffect( () => {
        const fetchRecipe = async () => {
            const recipe = await getOneRecipe(params.recipeId);
            setRecipe(recipe);
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
            <Comments recipeId={params.recipeId} />
        </div>
    )
}