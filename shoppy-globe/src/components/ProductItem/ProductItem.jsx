import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function ProductItem({ product }) {
    const dispatch = useDispatch();
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
        loading="lazy"
      />

      <h3>{product.title}</h3>

      <p className="price">${product.price}</p>

      <p>⭐ {product.rating}</p>

      <div className="button-group">
        <Link to={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>

        <button
  onClick={() => {
    try {
      dispatch(addToCart(product));
      alert("Added Successfully");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }}
>
  Add to Cart
</button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;