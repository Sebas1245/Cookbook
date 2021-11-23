import React, {useState} from 'react'
import Homepage from './views/Homepage';
import { getToken } from './services/tokenUtilities';

function App() {
  const [loggedIn, setLoggedIn] = useState(getToken())
  return (
    <div className="App">
      <Homepage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
