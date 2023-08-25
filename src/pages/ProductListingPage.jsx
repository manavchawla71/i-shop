import { products } from "../backend/products";
import "./ProductListingPage.css";
import { FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";
import { useItem } from "../context/ItemContext";
function ProductListingPage() {
  const { selectedCategory, sortby, selectedcolor } = useCategory();
  const { likedProducts, toggleLike, togglecart, cartproducts } = useItem();
  let filteredProducts = products;

  if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.productBrand === selectedCategory
    );
  }
  if (selectedcolor) {
    filteredProducts = filteredProducts.filter(
      (product) => product.color === selectedcolor
    );
  }
  // Sort products based on the selected sorting option
  if (sortby === "Ascending") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortby === "Descending") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortby === "Out of Stock") {
    filteredProducts = filteredProducts.filter(
      (product) => product.inStock === true
    );
  }
  return (
    <div className="product-listing-page">
      <Sidebar />
      <div className="product-list">
        <p className="product_count">{filteredProducts.length}</p>
        {filteredProducts.length === 0 ? (
          <p>No products match the selected criteria.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product._id} className="product-item">
              {cartproducts.includes(product._id) ? (
                <p>Added to cart</p>
              ) : (
                <FaShoppingCart
                  className="cart-icon"
                  onClick={() => togglecart(product._id)}
                />
              )}

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
              <Link to={`/product/${product._id}`} className="product-link">
                <img src={product.productImg} alt={product.productDetail} />
              </Link>
              <p>{product.productBrand}</p>
              <h2>{product.productDetail}</h2>
              <p>Price: {product.price}</p>
              <p>Discount: {product.discount}%</p>
              <div className="cart-icon-container"></div>
              {/* Add more product information here */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
