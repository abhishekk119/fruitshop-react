import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Kart from "./Kart";
import Home from "./Home";

function App() {
  return (
    <>
      <Router basename="/fruitshop-react">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/kart" element={<Kart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
