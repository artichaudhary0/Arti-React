import { userParams, userNavigate } from "react-router-dom";

function ProductDetails() {
  const { productId } = userParams();
  const navigate = userNavigate();

  return (
    <div className="product-details-page">
      <h2> Product Details - {productId}</h2>
    </div>
  );
}
