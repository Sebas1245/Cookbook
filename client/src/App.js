import './App.css';
import Homepage from './views/Homepage';
import RegistrationLoginForm from './views/RegistrationLoginForm';
import ImageUpload from './components/ImageUpload';
import RecipeForm from './components/RecipeForm';
import PublishRecipe from './views/PublishRecipe';
import Comments from './components/Comments';
import RecipeDetail from './views/RecipeDetail';

function App() {
  return (
    <div className="App">
      <Homepage loggedIn={true} />
    </div>
  );
}

export default App;
