import { getToken } from './tokenUtilities';
import axios from 'axios';
const baseRequestUrl = process.env.REACT_APP_BACKEND_URL;

export const login = async (loginData) => {
    try {
        const path = '/login';
        const {data} = await axios.post(baseRequestUrl + path, loginData);
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', data.user);
        return Promise.resolve(data.success)
    } catch (error) {
        return Promise.reject(error.response.data.message);
    }
}
export const signup = async (signupData) => {
    try {
        const path = '/register';
        const {data} = await axios.post(baseRequestUrl + path, signupData);
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', data.user);
        return Promise.resolve(data.success)
    } catch (error) {
        return Promise.reject(error.response.data.message);
    }
}

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

export const postRecipe = async (title, ingredients, steps, photo, category, description) => {
    // get secure url from our server 
    // translate later to AJAX GET request
    const { url } = await fetch(baseRequestUrl + "/recipes/s3url").then(res => res.json()); 
    console.log(url)
    // post image directly to s3 bucket
    // translate later to AJAX PUT request
    // add try catch statement for validation
    await fetch(url, {
        method: "PUT",
        header: {
            "Content-Type": "multipart/form-data"
        },
        body: photo
    });
    const photoRef = url.split('?')[0];
    // post request to server to upload image along with rest of recipe data
    const response = await fetch(baseRequestUrl + '/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            title,
            ingredients,
            steps,
            photoRef,
            category,
            description
        })
    })
}