
import './App.css';
import { Main } from './Components/Main/Main';
import { Navbar } from './Components/Navbar/Navbar.js';
import {
   BrowserRouter as Router, 
    
    
} from 'react-router-dom'
import {useRoutes} from './routes'

function App() {
  const routes = useRoutes()
  return (
    <Router>
{routes}
 </Router>
  );
}

export default App;
