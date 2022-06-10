import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
 import Users from './components/Users';
 import User from './components/User';

function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
        </nav>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<User />} />
      </Routes>
    </div>
  
  );
}



export default App;
