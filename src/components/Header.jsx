import { Link } from "react-router-dom";
import "../components/Header.css";
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="container">
          <div className="logo">
            <h1 className="logo">Exclusive</h1>
          </div>

          <Link to="/">Home</Link>
          <Link to="/contact">contact</Link>

          <Link to="/login">Login</Link>
          <Link to="/about">about</Link>

          <Link to="/signup">Sign Up</Link>
          <input placeholder="search your ...." type="text" />
          <div className="Header_icons">
            <FaRegHeart />
            <GrCart />
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
