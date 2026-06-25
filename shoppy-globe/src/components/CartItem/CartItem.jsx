import PropTypes from "prop-types";

function CartItem({ item }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <img
        src={item.thumbnail}
        alt={item.title}
        width="100"
      />

      <h3>{item.title}</h3>

      <p>Price: ${item.price}</p>

      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;