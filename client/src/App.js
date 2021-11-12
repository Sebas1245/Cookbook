import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MainNavbar from './components/MainNavbar.js'
import Homepage from './views/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage loggedIn={false} />
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