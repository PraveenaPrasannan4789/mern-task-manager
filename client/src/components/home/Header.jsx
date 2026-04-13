import "../../styles/header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">HireGuard</div>
      <nav className="nav-links">
        <a href="#" className="nav">
          About Us
        </a>
        <a href="#" className="nav">
          Login
        </a>
        <a href="#" className="nav">
          Signup
        </a>
      </nav>
    </header>
  );
};

export default Header;
