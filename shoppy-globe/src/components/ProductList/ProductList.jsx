import "../../styles/Product.css";
import { useSelector } from "react-redux";
import useProducts from "../../hooks/useProducts";
import ProductItem from "../ProductItem/ProductItem";

function ProductList() {
  const { products, loading, error } = useProducts();

  const searchTerm = useSelector(
    (state) => state.search.searchTerm
  );

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <h2>No products found.</h2>
      )}
    </div>
  );
}

export default ProductList;