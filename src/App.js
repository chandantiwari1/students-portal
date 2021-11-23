
import './App.css';

import ButtonAppBar from './components/navbar/Navbar';

import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Dashboard from './dashboard/Dashboard';
function App() {
  var {user}=useContext(AuthContext);

  return (
    <div className="App">
      { user && <Dashboard/>}
      {!user && <ButtonAppBar/>}
    </div>
  );
}

export default App;
