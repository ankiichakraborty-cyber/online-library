import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
        width="100"
      />

      <div style={{ flex: 1 }}>
        <h3>{item.title}</h3>

        <p>Price: ${item.price}</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;