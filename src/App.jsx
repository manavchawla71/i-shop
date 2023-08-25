import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WishListPage from "./pages/WishListPage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { CategoryProvider } from "./context/CategoryContext";
import { ItemProvider } from "./context/ItemContext";
function App() {
  return (
    <>
      <Router>
        <CategoryProvider>
          <ItemProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product-listing" element={<ProductListingPage />} />
              <Route path="/wishlist" element={<WishListPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/product/:productId"
                element={<ProductDetailPage />}
              />
            </Routes>
          </ItemProvider>
        </CategoryProvider>
      </Router>
    </>
  );
}

export default App;
