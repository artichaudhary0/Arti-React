import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  return (
    <div className="product-details-page">
      <h2> Product Details - {productId}</h2>
    </div>
  );
}

export default ProductDetails;