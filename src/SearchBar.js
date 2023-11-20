function SearchBar({ updateProducts }) {
  function handleInput(event) {
    const queryValue = event.target.value;

    if (queryValue) {
      updateProducts((prev) => {
        return {
          ...prev,
          filteredProducts: prev.products.filter((product) =>
            product.name.toLowerCase().includes(queryValue.toLowerCase())
          ),
        };
      });
    } else {
      updateProducts((prev) => {
        return {
          ...prev,
          filteredProducts: prev.products,
        };
      });
    }
  }

  function handleCheckbox(event) {
    if (event.target.checked) {
      updateProducts((prev) => {
        return {
          ...prev,
          filteredProducts: prev.products.filter((product) => product.inStock),
        };
      });
    } else {
      updateProducts((prev) => {
        return {
          ...prev,
          filteredProducts: prev.products,
        };
      });
    }
  }
  return (
    <section className="search-bar">
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInput}
        className="search-input"
        autoComplete="off"
      />
      <div className="checkbox">
        <input id="inStock" type="checkbox" onChange={handleCheckbox} />
        <label htmlFor="inStock">Only show products on stock</label>
      </div>
    </section>
  );
}

export default SearchBar;
