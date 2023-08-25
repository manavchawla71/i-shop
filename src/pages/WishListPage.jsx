import { useItem } from "../context/ItemContext";
import { products } from "../backend/products"; // Import your product data source
import "./WishListPage.css";
const WishListPage = () => {
  const { likedProducts } = useItem();

  // Filter the products based on the likedProducts array
  const likedProductsData = products.filter((product) =>
    likedProducts.includes(product._id)
  );

  return (
    <div>
      <h1>Wishlist</h1>
      {likedProductsData.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {likedProductsData.map((product) => (
            <li key={product._id}>
              <img src={product.productImg} alt={product.productDetail} />
              <p>{product.productBrand}</p>
              <h2>{product.productDetail}</h2>
              <p>Price: Rs.{product.price}</p>
              <p>Discount: {product.discount}%</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishListPage;
