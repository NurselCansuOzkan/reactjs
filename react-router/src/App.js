import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  NavLink } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
 import Users from './components/Users';
 import Error404 from './components/Error404';

function App() {
  return (
    <Router>
    <div className="App">
    <nav>
      <ul>
        <li>
          <NavLink activeClassName='active' to="/about">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to="/users">Users</NavLink>
        </li>
      </ul>
        </nav>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users}/>
        <Route path="*" component={Error404}/>
     
      </Switch>
    </div>
  </Router>
  );
}



export default App;
