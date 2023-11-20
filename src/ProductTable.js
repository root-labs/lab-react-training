// Component
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <section className="products-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ProductTable;
