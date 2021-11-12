import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './views/Homepage';
import RegistrationLoginForm from './views/RegistrationLoginForm';

function App() {
  return (
    <div className="App">
      <RegistrationLoginForm headerText={"Sign up"} />
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