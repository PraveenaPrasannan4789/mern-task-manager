import { Link } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">HireGuard</div>
      <nav className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
