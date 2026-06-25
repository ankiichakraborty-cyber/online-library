import useProducts from "../../hooks/useProducts";

function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductList;