import "../../styles/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="header">
      <h1 className="logo">🛍️ ShoppyGlobe</h1>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>

        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

export default Header;