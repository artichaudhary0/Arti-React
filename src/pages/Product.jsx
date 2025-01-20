import { Link, Outlet } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
    { id: 4, name: "product 4" },
  ];

  return (
    <div className="page products">
      <h1>Products</h1>

      <div className="products-container">
        <div className="products-list">
          <h2>Product list</h2>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-link"
            >
              {product.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
