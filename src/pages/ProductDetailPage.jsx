import { Link, useParams } from "react-router-dom";
import { products } from "../backend/products"; // Import your product data source
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useItem } from "../context/ItemContext";

const ProductDetailPage = () => {
  const { productid } = useParams();
  const { likedProducts, toggleLike } = useItem();

  // Find the product with the matching ID
  const product = products.find((product) => product._id === productid);

  // Check if the product exists

  return (
    <div className="product-detail-page">
      <div className="product-item">
        <div className="wishlist-icon">
          {likedProducts.includes(product._id) ? (
            <FaHeart
              size={23}
              color="var(--green-color)"
              onClick={() => toggleLike(product._id)}
            />
          ) : (
            <FaRegHeart
              size={23}
              color="var(--green-color)"
              onClick={() => toggleLike(product._id)}
            />
          )}
        </div>
        <img src={product.productImg} alt={product.productDetail} />
        <p>{product.productBrand}</p>
        <h2>{product.productDetail}</h2>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discount}%</p>
        {/* Add more product information here */}
      </div>
      <Link to="/product-listing">Back to Product Listing</Link>
    </div>
  );
};

export default ProductDetailPage;
