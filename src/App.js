import './App.css';
import Navbar from './Components/Pages/Navbar';
import {BrowserRouter as Router, Switch,
  Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/'/>          
        </Switch>
      </Router>
      <header className="Header">
        <h1>Sorry! I'm still building it</h1>
      </header>
    </div>
  );
}

export default App;