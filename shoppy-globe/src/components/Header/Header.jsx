import "../../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🛍️ <span>ShoppyGlobe</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

export default Header;