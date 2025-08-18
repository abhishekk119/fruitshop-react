import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar({ showCounter, cart }) {
  return (
    <nav className="navbar">
      <div className="navbarcontainer">
        <h2 className="logo">
          <strong>FruitShop</strong>
        </h2>

        <Link to="/kart" className="kart" style={{ textDecoration: "none" }}>
          <div className="kartwrapper">
            <div className="itemcounterwrapper">
              {showCounter && <div className="itemcounter">{cart.length}</div>}
            </div>
            <div className="kartimage">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ height: "35px", width: "35px", color: "white" }}
              />
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
