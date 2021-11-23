import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './custom.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PublishRecipe from './views/PublishRecipe';
import RegistrationLoginForm from './views/RegistrationLoginForm';
import RecipeDetail from './views/RecipeDetail';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<RegistrationLoginForm headerText="Please login" />} />
      <Route path="/register" element={<RegistrationLoginForm headerText="Sign up" />} />
      <Route path="/recipes">
        <Route path=":recipeId" element={<RecipeDetail />} />
      </Route>
      <Route path="/new_recipe" element={<PublishRecipe/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
