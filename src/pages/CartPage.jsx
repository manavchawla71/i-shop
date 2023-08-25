// import React from "react";
import { useItem } from "../context/ItemContext";
import { products } from "../backend/products"; // Import your product data source
import "./CartPage.css"; // Assuming you have a CartPage.css for styling

const CartPage = () => {
  const { cartproducts } = useItem();

  // Filter the products based on the cartproducts array
  const cartProductsData = products.filter((product) =>
    cartproducts.includes(product._id)
  );

  // Calculate the total bill
  const totalBill = cartProductsData.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="cart-page-container">
      <div className="cart-products">
        <h1>Your Cart</h1>
        {cartProductsData.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-container">
            {cartProductsData.map((product) => (
              <div key={product._id} className="cart-item">
                <img
                  src={product.productImg}
                  alt={product.productDetail}
                  className="cart-image"
                />
                <div className="cart-details">
                  <p>{product.productBrand}</p>
                  <h2>{product.productDetail}</h2>
                  <p>Price: ${product.price}</p>
                  <p>Discount: {product.discount}%</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart-bill">
        <h1>Your Bill</h1>
        <p>Total: ${totalBill.toFixed(2)}</p>
        {totalBill && <button>checkout</button>}
      </div>
    </div>
  );
};

export default CartPage;
