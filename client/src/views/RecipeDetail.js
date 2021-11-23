import React from 'react'
import MainNavbar from '../components/MainNavbar'
import Comments from '../components/Comments'
import RecipeInfo from '../components/RecipeInfo'


export default function RecipeDetail() {
    return (
        <div>
            <MainNavbar />
            <RecipeInfo />
            <Comments />
        </div>
    )
}