import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state.cart.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-2 custom-navbar">
      <div className="container-fluid py-2">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="navbar-brand mx-5 fw-bold fs-4" to="/">
                SHOPIFY NEPAL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/products">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/order">
                My Order
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
          <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
          Cart ({state?.length})
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
