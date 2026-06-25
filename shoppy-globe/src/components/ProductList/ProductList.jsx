import "../../styles/Product.css";
import useProducts from "../../hooks/useProducts";
import ProductItem from "../ProductItem/ProductItem";

function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;