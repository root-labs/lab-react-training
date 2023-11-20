import { useState } from "react";

// Components
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

import jsonData from "./data.json";

function ProductsPage() {
  const [products, setProducts] = useState({
    products: jsonData,
    filteredProducts: jsonData,
  });

  return (
    <div className="products-page">
      <h1>Store</h1>
      <SearchBar updateProducts={setProducts} />
      <ProductTable products={products.filteredProducts} />
      <p>
        Showing {products.filteredProducts.length} of {products.products.length}{" "}
        products
      </p>
    </div>
  );
}

export default ProductsPage;
