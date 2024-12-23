import { Link } from "react-router-dom";
import './styles.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/recipes/search">Search</Link>
        </li>
        <li className="navbar-item">
          <Link to="/recipes/new">Add new recipe</Link>
        </li>
        <li className="navbar-item">
          <Link to="/user/login">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/user/logout">Logout</Link>
        </li>
        <li className="navbar-item">
          <Link to="/user/register">Register</Link>
        </li>
      </ul>
    </nav>
  )
}