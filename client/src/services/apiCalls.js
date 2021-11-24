const baseRequestUrl = process.env.REACT_APP_BACKEND_URL;

export const getAllRecipes = async () => {
    const path = '/recipes'
    const response = await fetch(baseRequestUrl + path).then(res => res.json());
    console.log(response)
    return response.allRecipes;
}