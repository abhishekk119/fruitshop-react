import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Kart from "./Kart";
import Home from "./Home";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      // Check if item already exists in cart
      const existingItem = prev.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        // If exists, increment quantity
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // If new item, add with quantity 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <>
      <Router basename="/fruitshop-react">
        <Routes>
          <Route path="*" element={<Home addToCart={addToCart} />} />
          <Route path="/kart" element={<Kart cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
