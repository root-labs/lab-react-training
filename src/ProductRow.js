function ProductRow({ product }) {
  return (
    <tr style={{ color: product.inStock ? "inherit" : "red" }}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
