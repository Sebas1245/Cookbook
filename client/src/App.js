import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MainNavbar from './components/MainNavbar.js'

function App() {
  return (
    <div className="App">
      <MainNavbar leftButtonText={"Login"} rightButtonText={"Add a recipe"} />
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