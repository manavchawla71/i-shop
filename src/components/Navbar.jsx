import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { useItem } from "../context/ItemContext";
const Navbar = () => {
  const location = useLocation();
  const showIconsOnRoutes = ["/product-listing"];
  const { likedProducts } = useItem();
  // Check if the current location is one of the routes where icons should be shown
  const shouldShowIcons = showIconsOnRoutes.includes(location.pathname);
  return (
    <>
      <nav className="navigation">
        <div className="nav-brand flex ai-center">
          <button className="ham-btn btn-unset">
            <i
              className="fas fa-bars ham-icon"
              id="ham-icon"
              // onClick={handleHamMenuToggleClick}
            />
          </button>
          <Link to="/" className="brand-name">
            IShop
          </Link>
        </div>
        <div className="nav-icons">
          {shouldShowIcons && (
            <>
              <Link to="/cart" className="nav-icon">
                <FaShoppingCart />
              </Link>
              <Link to="/wishlist" className="nav-icon">
                <FaHeart />
                {likedProducts.length > 0 && (
                  <span className="badge">{likedProducts.length}</span>
                )}
              </Link>
              <Link to="/profile" className="nav-icon">
                <FaUser />
              </Link>
            </>
          )}
        </div>
      </nav>
      {/* <button>get started</button> */}
    </>
  );
};

export default Navbar;
