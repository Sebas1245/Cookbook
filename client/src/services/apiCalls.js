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
    try {
        const path = '/recipes'
        const {data} = await axios.get(baseRequestUrl + path); 
        return Promise.resolve(data.allRecipes);
    } catch (error) {
        return Promise.reject(error.response.data.message);
    }

}

export const getOneRecipe = async (recipeId) => {
    try {
        const path = '/recipes/'+ recipeId;
        const {data} = await axios.get(baseRequestUrl + path); 
        return Promise.resolve(data.recipe);
    } catch (error) {
        return Promise.reject(error.response.data.message);
    }
}

export const getCommentsForRecipe = async (recipeId) => {
    try {
        const path = '/recipes/comments/' + recipeId;
        const {data} = await axios.get(baseRequestUrl + path); 
        return Promise.resolve(data.comments);
    } catch (error) {
        return Promise.reject(error.response.data.message);
    }
}

export const postRecipe = async ({title, ingredients, steps, image, category, description}) => {
    try {
        // get secure url from our server 
        // translate later to AJAX GET request
        let photoRef;
        if (image === undefined)  {
            photoRef = "https://cookbook-files.s3.amazonaws.com/default-photo.jpeg"
        } else {
            const { data } = await axios.get(baseRequestUrl + "/recipes/s3url", {
                headers: {
                    Authorization: `Bearer: ${getToken()}`
                }
            })
            const url = data.url 
    
            // post image directly to s3 bucket
            // translate later to AJAX PUT request
            // add try catch statement for validation
            await fetch(url, {
                method: "PUT",
                header: {
                    "Content-Type": "multipart/form-data",
                },
                body: image
            });
            photoRef = url.split('?')[0];
        }
        const requestData = { title, ingredients, steps, photoRef, category, description};
        // post request to server to upload image along with rest of recipe data
        const response = await axios.post(baseRequestUrl + '/recipes', requestData, {
            headers: {
                Authorization: `Bearer: ${getToken()}`
            }
        })
        return Promise.resolve(response.status === 201);
    } catch (error) {
        return Promise.reject(error.response.data.message);
    }
}

export const postComment = async (requestData) => {
    alert(JSON.stringify(requestData));
    try {
        const {data} = await axios.put(baseRequestUrl + '/recipes/comments', requestData, {
            headers: {
                Authorization: `Bearer: ${getToken()}`
            }
        });
        return Promise.resolve(data.comments);
    } catch (error) {
        return Promise.reject(error.response.data.message);
    }
}