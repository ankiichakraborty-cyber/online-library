import "../../styles/Header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/searchSlice";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="logo">
        🛍️ ShoppyGlobe
      </div>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>

        <Link to="/checkout">
          Checkout
        </Link>
      </nav>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) =>
          dispatch(setSearchTerm(e.target.value))
        }
      />
    </header>
  );
}

export default Header;