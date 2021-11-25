const baseRequestUrl = process.env.REACT_APP_BACKEND_URL;

export const getAllRecipes = async () => {
    const path = '/recipes'
    const response = await fetch(baseRequestUrl + path).then(res => res.json());
    console.log(response)
    return response.allRecipes;
}

export const getOneRecipe = async (recipeId) => {
    const path = '/recipes/'+ recipeId;
    const response = await fetch(baseRequestUrl + path).then(res => res.json()); 
    console.log(response);
    return response.recipe;
}

export const getCommentsForRecipe = async (recipeId) => {
    const path = '/recipes/comments/' + recipeId;
    const response = await fetch(baseRequestUrl + path).then(res => res.json());
    console.log(response)
    return response.comments;
}