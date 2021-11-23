import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './views/Homepage';
import RegistrationLoginForm from './views/RegistrationLoginForm';
import ImageUpload from './components/ImageUpload';
import RecipeForm from './components/RecipeForm';
import PublishRecipe from './views/PublishRecipe';

function App() {
  return (
    <div className="App">
      <Homepage loggedIn={true}/>
    </div>
  );
}

export default App;

/* 
<Routes>
    <Route path="/" compon/>
    <Route/>
</Routes> 
*/