import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { useNavigate } from 'react-router-dom';
import RecipesGrid from '../components/RecipesGrid';
import { deleteToken } from '../services/tokenUtilities';


const Homepage = ({loggedIn, setLoggedIn}) => {
    // const [recipe, setRecipe] = useState([]);
    const navigate = useNavigate();
    const redirectTo = (path) => {
        console.log('redirecting to ', path);
        navigate(path);
    }
    const logout = () => {
        deleteToken();
        setLoggedIn(false);
        navigate('/');
    }
    const leftButtonText = loggedIn ? "Logout" : "Login";
    const rightButtonText = loggedIn ? "Add a recipe" : "Register";
    
    return (
        <div>
            <MainNavbar 
            leftButtonText={leftButtonText} rightButtonText={rightButtonText}
            leftButtonAction={() => loggedIn ? logout() : redirectTo('/login')} 
            rightButtonAction={() => loggedIn ? redirectTo('/new_recipe') : redirectTo('/register')} />
            <RecipesGrid/>
        </div>
    )
} 

export default Homepage;