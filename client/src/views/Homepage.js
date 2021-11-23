import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { useNavigate } from 'react-router-dom';
import RecipesGrid from '../components/RecipesGrid';


const Homepage = ({loggedIn}) => {
    // const [recipe, setRecipe] = useState([]);
    const navigate = useNavigate();
    const redirectTo = (path) => {
        console.log('redirecting to ', path);
        navigate(path);
    }
    const leftButtonText = loggedIn ? "Logout" : "Login";
    const rightButtonText = loggedIn ? "Add a recipe" : "Register";
    
    return (
        <div>
            <MainNavbar 
            leftButtonText={leftButtonText} rightButtonText={rightButtonText}
            leftButtonAction={() => loggedIn ? redirectTo('/') : redirectTo('/login')} 
            rightButtonAction={() => loggedIn ? redirectTo('/new_recipe') : redirectTo('/register')} />
            <RecipesGrid/>
        </div>
    )
} 

export default Homepage;