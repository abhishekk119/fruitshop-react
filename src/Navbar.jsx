import { useState } from "react";
import shoppingcartimage from "./assets/icons8-shopping-cart-80.png";
import { Link } from "react-router-dom";

function Navbar({ counter, showCounter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">
        <strong>FruitShop</strong>
      </h2>

      {/* Hamburger Icon (Mobile Only) */}
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#fruits" onClick={() => setIsMenuOpen(false)}>
              Fruits
            </a>
          </li>
          <li>
            <a href="#juices" onClick={() => setIsMenuOpen(false)}>
              Juices
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Store Locator
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className="desktop-menu">
        <li>
          <a href="#fruits">Fruits</a>
        </li>
        <li>
          <a href="#juices">Juices</a>
        </li>
        <li>
          <a href="#">Store Locator</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <Link to="/kart" className="kart">
        {showCounter && (
          <div className="itemcounter">
            <p>{counter}</p>
          </div>
        )}
        <div className="kartimage">
          <img
            src={shoppingcartimage}
            style={{ height: "45px", width: "45px" }}
            alt="Cart"
          />
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
