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
      {console.log(cart)}

      <div className="kartitemwrapper">
        {cart.map((item, i) => (
          <div key={i} className="kartitems">
            <img
              src={item.imageSource}
              alt=""
              style={{ height: "40px", width: "60px" }}
            />
            <h3>{item.name}</h3>
            <p>
              ₹{item.price} × {item.quantity}
            </p>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
          </div>
        ))}
        <div className="totaldiv">
          <h3>Total = {totalPrice}</h3>
        </div>

        <div className="placeorderbuttondiv">
          <button className="placeorderbutton">Place order</button>
        </div>

        <div className="continueshoppingbutton">
          <button
            className="continueshopping-button"
            onClick={() => navigate(-1)}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}

export default Kart;
