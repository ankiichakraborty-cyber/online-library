import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Order placed");

    dispatch(clearCart());

    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      <h3>Order Summary</h3>

      {cartItems.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.title} × {item.quantity}
            </p>
          </div>
        ))
      )}

      <br />

      <button onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;