import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      )}
    </div>
  );
}

export default Cart;