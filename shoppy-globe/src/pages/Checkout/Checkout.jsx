import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout Page</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              width="120"
            />

            <h3>{item.title}</h3>

            <p>Price: ${item.price}</p>

            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Checkout;