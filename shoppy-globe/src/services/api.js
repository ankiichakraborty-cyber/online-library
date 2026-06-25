const BASE_URL = "https://dummyjson.com/products";

export async function fetchProducts() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}