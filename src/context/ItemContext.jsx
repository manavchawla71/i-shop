import { createContext, useContext } from "react";
import { useState } from "react";
export const ItemContext = createContext();
export const ItemProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartproducts, setcartproducts] = useState([]);
  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      // Remove the product from the liked list
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      // Add the product to the liked list
      setLikedProducts([...likedProducts, productId]);
    }
  };
  const togglecart = (productId) => {
    setcartproducts([...cartproducts, productId]);
  };
  return (
    <ItemContext.Provider
      value={{ likedProducts, toggleLike, cartproducts, togglecart }}
    >
      {children}
    </ItemContext.Provider>
  );
};
export function useItem() {
  return useContext(ItemContext);
}
