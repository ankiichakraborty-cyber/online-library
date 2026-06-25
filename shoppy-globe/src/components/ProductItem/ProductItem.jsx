import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <h3>{product.title}</h3>

      <p className="price">${product.price}</p>

      <p>⭐ {product.rating}</p>

      <div className="button-group">
        <Link to={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;