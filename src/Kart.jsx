import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Kart({ cart }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="kartlogo">
        <p className="kartlogofruitshop">FruitShop</p>
      </div>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "80px" }}>
          Your cart is empty
        </p>
      ) : (
        <div className="kartitemwrapper">
          {cart.map((item, i) => (
            <div key={i} className="kartitems">
              <img
                src={item.imageSource}
                alt=""
                style={{ height: "40px", width: "60px", borderRadius: "6px" }}
              />
              <h3
                style={{
                  fontSize: "15px",
                  fontFamily: "Inter, sans-serif",
                  color: "gray",
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "Inter, sans-serif",
                  color: "gray",
                }}
              >
                ₹{item.price} x {item.quantity}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "Inter, sans-serif",
                  color: "gray",
                }}
              >
                Subtotal: ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
          <div className="totaldiv">
            <h3
              style={{
                fontSize: "15px",
                fontFamily: "Inter, sans-serif",
                color: "gray",
              }}
            >
              Total: ₹{totalPrice}
            </h3>
          </div>

          <div className="deliveryaddressdiv">
            <p>
              Delivering To: Behind Dr. P.K.Das Chamber, Golbagan, Coochbehar,
              Phone: 9332522166
            </p>
            <p>Expected Delivery: 25 Minutes</p>
          </div>

          <div className="placeorderbuttondiv">
            <button className="placeorderbutton">
              Continue to payment <span className="animate-arrows">{">>"}</span>
            </button>
          </div>
        </div>
      )}
      <div className="continueshoppingbutton">
        <button
          className="continueshopping-button"
          onClick={() => navigate(-1)}
        >
          Continue Shopping
        </button>
      </div>
    </>
  );
}

export default Kart;
